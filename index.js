const ping = require("ping"); // Lightweight module for pinging
const fs = require("fs"); // For interacting with the file system
const path = require("path"); // For manipulating file paths
const cron = require("node-cron"); // For scheduling tasks
const { exec } = require("child_process"); // To execute shell commands

const sendErrorEmail = require("./email/sendErrorEmail"); // Module to send error notification emails
const sendRecoveryEmail = require("./email/sendRecovery"); // Module to send recovery notification emails
const formatDate = require("./function/timeFormat"); // Function to format dates
const readAndValidateJsonFiles = require("./function/getJsonData"); // Function to read and validate JSON files
const createListError = require("./function/createListError"); // Function to generate an Excel file with errors
const sendListError = require("./email/sendListError"); // Function to send an email with the list of errors

const getSystemInformation = require("./function/getSystemInformation"); // Function to get system information
const sendSystemInformation = require("./email/sendSystemInformation");
const sendErrorSystemAdmin = require("./email/sendErrorToAdmin");
const delay = require("./function/delay");

// Cache to prevent repeated email notifications
const emailCooldown = new Map();
const unreachableDevices = [];

// Helper function to throttle email sending
function shouldSendEmail(data, type) {
  const key = `${data.name}-${type}`;
  const now = Date.now();
  const lastSent = emailCooldown.get(key) || 0;

  if (now - lastSent > 30000) {
    // Cooldown period of 30 seconds
    emailCooldown.set(key, now);
    return true;
  }
  return false;
}

// Function to ping a given IP address and analyze its status
async function pingAddress(data) {
  const lineNetwork = 5; // Number of lines to analyze in the log
  const filePath = path.join(__dirname, "email/log", `${data.name}.txt`);

  try {
    // Ping the IP address using the `ping` module
    const res = await ping.promise.probe(data.ipAddress, { timeout: 1 });

    const outputLines = res.output.split("\r\n");

    // Create a log message
    const logMessage = `${
      res.alive ? outputLines[2] : `${data.ipAddress} - Request timed out.`
    } - ${formatDate()} `;
    console.log(logMessage);

    // Append the log message to the log file
    await fs.promises.appendFile(filePath, logMessage + "\n");

    // Read the last few lines of the log file (optional, for analysis)
    const fileData = await fs.promises.readFile(filePath, "utf8");
    const lines = fileData.trim().split("\n");
    const lastFiveLines = lines.slice(-lineNetwork);

    // Check if all recent logs are failures or successes
    const allNoReply = lastFiveLines.every(
      (line) => !line.startsWith("Reply from")
    );
    const allSuccess = lastFiveLines.every((line) =>
      line.startsWith("Reply from")
    );

    // Send email if the status has changed
    if (allNoReply && shouldSendEmail(data, "error") && !data.error) {
      sendErrorEmail(data); // Send error notification email
      console.log("Send error email");
      data.error = true;
      if (!unreachableDevices.includes(data)) {
        unreachableDevices.push(data); // Add to the list of unreachable devices
      }
    } else if (allSuccess && shouldSendEmail(data, "recovery") && data.error) {
      console.log("Send recovery email");
      sendRecoveryEmail(data); // Send recovery notification email
      data.error = false;
      const index = unreachableDevices.indexOf(data);
      if (index !== -1) {
        unreachableDevices.splice(index, 1); // Remove device from the unreachable list
      }
    }
  } catch (err) {
    console.error(`Ping error for ${data.name}:`, err);
    sendErrorSystemAdmin(err);
  }
}

const allDevices = [];
let getAlldata = false;

// Load and validate JSON device data
(async () => {
  const schema = {
    name: "string",
    ipAddress: "string",
    device: "string",
    error: "boolean",
    description: "string",
  };

  const dirPath = path.join(__dirname, "device");
  const allValidData = await readAndValidateJsonFiles(dirPath, schema);

  // Add the valid data to the global allDevices array
  allDevices.push(...allValidData);

  console.log("Combined Valid Data:", allValidData);
  getAlldata = true;
  if (getAlldata) {
    const pingPromises = allDevices.map(pingAddress);
    await Promise.all(pingPromises); // Wait for all pings to complete
  }

  await createListError(unreachableDevices);
  await getSystemInformation(allDevices);

  await delay(1800000);

  await sendListError();
  await sendSystemInformation();
})();

// Batch pinging of devices
const batchPing = async () => {
  if (getAlldata) {
    const pingPromises = allDevices.map(pingAddress);
    await Promise.all(pingPromises); // Wait for all pings to complete
  }
  console.log("Batch pinging complete.");
};

// Clear the log folder
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

// Scheduled task to clear logs on the 1st of every month at 12 AM
cron.schedule("0 0 1 * *", () => {
  console.log("Running scheduled task on the 1st of the month at 12 AM...");
  clearLogFolder();
});

// Scheduled task to generate error reports every Monday at 9 AM
cron.schedule("0 9 * * 1", async () => {
  try {
    // Restart the computer based on the operating system
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
    sendErrorSystemAdmin(error);
  }
});

// Ping all  devices every 30 second
setInterval(batchPing, 30000);
