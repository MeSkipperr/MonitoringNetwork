const ping = require("ping"); // Modul ringan untuk ping
const fs = require("fs"); // Untuk interaksi file sistem
const path = require("path"); // Untuk manipulasi path file
const cron = require("node-cron"); // Untuk penjadwalan tugas

const ipTV = require("./device/ipTV");
const cctv = require("./device/cctv")

const sendErrorEmail = require("./email/sendErrorEmail");
const sendRecoveryEmail = require("./email/sendRecovery");
const formatDate = require("./timeFormat");

// Cache untuk menghindari pengiriman email berulang
const emailCooldown = new Map();

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

        // Buat log message
        const logMessage = `${res.alive ? `Reply from ${data.ipAddress}` : "Request timed out."
            } - ${formatDate()}`;
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
        if (allNoReply && shouldSendEmail(data, "error")) {
            sendErrorEmail(data); // Kirim email error
            data.error = true;
        } else if (allSuccess && shouldSendEmail(data, "recovery")) {
            sendRecoveryEmail(data); // Kirim email recovery
            data.error = false;
        }
    } catch (err) {
        console.error(`Ping error for ${data.name}:`, err);
    }
}

// Batch dan interval ping
const batchPing = async () => {
    // console.log("Starting ping batch...");
    const allDevices = [...cctv, ...ipTV]; // Atau gunakan cctv.concat(ipTV)
    const pingPromises = allDevices.map(pingAddress);
    await Promise.all(pingPromises); // Tunggu semua selesai
    // console.log("Batch complete.");
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


setInterval(batchPing, 60000); // Ping semua alamat IPTV setiap 60 detik

// Penjadwalan untuk mengirim email log setiap Senin pukul 9 pagi
cron.schedule("0 12 * * 0", () => {
    console.log("Running scheduled task on Sunday at 12 PM...");
    clearLogFolder();
});
