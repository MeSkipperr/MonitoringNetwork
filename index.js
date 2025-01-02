const ping = require("ping"); // Modul ringan untuk ping
const fs = require("fs"); // Untuk interaksi file sistem
const path = require("path"); // Untuk manipulasi path file
const cron = require("node-cron"); // Untuk penjadwalan tugas

const sendErrorEmail = require("./email/sendErrorEmail");
const sendRecoveryEmail = require("./email/sendRecovery");
const formatDate = require("./function/timeFormat");
const readAndValidateJsonFiles = require("./function/getJsonData");
const createListError = require("./function/createListError");
const sendListError = require("./email/sendListError");


// Cache untuk menghindari pengiriman email berulang
const emailCooldown = new Map();
const unreachableDevices = [];

// Helper untuk throttle email pengiriman
function shouldSendEmail(data, type) {
  const key = `${data.name}-${type}`;
  const now = Date.now();
  const lastSent = emailCooldown.get(key) || 0;

  if (now - lastSent > 30000) {
    // 30 detik cooldown
    emailCooldown.set(key, now);
    return true;
  }
  return false;
}

// Fungsi untuk mem-ping alamat IPTV
async function pingAddress(data) {
  const lineNetwork = 5;
  const filePath = path.join(__dirname, "email/log", `${data.name}.txt`);

  try {
    // Ping alamat menggunakan modul `ping`
    const res = await ping.promise.probe(data.ipAddress, { timeout: 1 });

    const outputLines = res.output.split("\r\n");

    // Buat log message
    const logMessage = `${
      res.alive ? outputLines[2] : `${data.ipAddress} - Request timed out.`
    } - ${formatDate()} `;
    console.log(logMessage);

    // Tambahkan log ke file log
    await fs.promises.appendFile(filePath, logMessage + "\n");

    // Baca file log terakhir (opsional, jika analisis diperlukan)
    const fileData = await fs.promises.readFile(filePath, "utf8");
    const lines = fileData.trim().split("\n");
    const lastFiveLines = lines.slice(-lineNetwork);

    // Analisis apakah semua gagal atau berhasil
    const allNoReply = lastFiveLines.every(
      (line) => !line.startsWith("Reply from")
    );
    const allSuccess = lastFiveLines.every((line) =>
      line.startsWith("Reply from")
    );

    // Kirim email jika status berubah
    if (allNoReply && shouldSendEmail(data, "error") && !data.error) {
      // sendErrorEmail(data); // Kirim email error
      console.log("send mail err")
      data.error = true;
      if (!unreachableDevices.includes(data)) {
        unreachableDevices.push(data); // Tambahkan ke daftar perangkat tidak terkoneksi
      }
    } else if (allSuccess && shouldSendEmail(data, "recovery") && data.error) {
      console.log("send mail recov")
      sendRecoveryEmail(data); // Kirim email recovery
      data.error = false;
      const index = unreachableDevices.indexOf(data);
        if (index !== -1) {
          unreachableDevices.splice(index, 1);
        }
    }
  } catch (err) {
    console.error(`Ping error for ${data.name}:`, err);
  }
}
const allDevices = []
let getAlldata = false;

(async () => {
  const dirPath = path.join(__dirname, 'device');
  const allValidData = await readAndValidateJsonFiles(dirPath);

  // Add the valid data to the global allDevices array
  allDevices.push(...allValidData);

  console.log('Combined Valid Data:', allValidData);
  getAlldata = true
})();

// Batch dan interval ping
const batchPing = async () => {
  if(getAlldata){
    const pingPromises = allDevices.map(pingAddress);
    await Promise.all(pingPromises); // Tunggu semua selesai
    // console.log("Batch complete.");
  }
};

const clearLogFolder = () => {
  const logFolder = "./email/log/";

  fs.readdir(logFolder, (err, files) => {
    if (err) {
      console.error("Error reading log folder:", err);
      return;
    }

    files.forEach((file) => {
      const filePath = path.join(logFolder, file);

      fs.unlink(filePath, (err) => {
        if (err) {
          console.error(`Error deleting file ${filePath}:`, err);
        } else {
          console.log(`Deleted file: ${filePath}`);
        }
      });
    });
  });
};

cron.schedule("0 0 1 * *", () => {
  console.log("Running scheduled task on the 1st of the month at 12 AM...");
  clearLogFolder();
});

cron.schedule("0 9 * * 1", async () => {
  try {
    console.log("Generating error list Excel file...");
    await createListError(unreachableDevices); // Buat file Excel

    console.log("Sending error list email...");
    await sendListError(); // Kirim email

    console.log("Email sent. Preparing to restart the computer...");
    
    // Jalankan perintah restart sesuai sistem operasi
    const command =
      process.platform === "win32" ? "shutdown /r /t 0" : "sudo reboot";

    exec(command, (error, stdout, stderr) => {
      if (error) {
        console.error(`Failed to execute restart command: ${error.message}`);
        return;
      }
      console.log(`Restart command executed successfully: ${stdout}`);
    });
  } catch (error) {
    console.error("An error occurred during the scheduled task:", error);
  }
});

setInterval(batchPing, 30000); // Ping semua alamat IPTV setiap 30 detik