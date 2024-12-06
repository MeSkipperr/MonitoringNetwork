// Import necessary dependencies
const { exec } = require("child_process"); // To execute system commands like 'ping'
const fs = require("fs"); // To interact with the file system (reading/writing files)
const path = require("path"); // For handling and transforming file paths
const cron = require("node-cron"); // For scheduling tasks at specific intervals

// Import the list of IPTV addresses to ping
const networkData = require("./networkData");

// Import functions to send error and log emails
const sendErrorEmail = require("./sendErrorEmail");
const sendLogToEmail = require("./sendLogToEmail");

// Function to ping an IPTV address and handle the response
async function pingAddress(data) {
  // Execute the ping command to check if the IPTV server is reachable
  exec(`ping ${data.ipAddress} -n 1`, async (error, stdout, stderr) => {
    try {
      // Split the output by newlines to examine the ping response
      const outputLines = stdout.split("\r\n");
      // The log message is the third line, or 'Request timed out.' if no reply
      const logMessage = outputLines[2] || "Request timed out.";
      console.log(logMessage); // Log the result to the console

      // Define the path for the log file (one file per IPTV entry)
      const filePath = path.join(__dirname, "log", `${data.name}.txt`);

      // Append the log message to the corresponding log file
      await fs.promises.appendFile(filePath, logMessage + "\n");

      // Read the content of the log file to analyze the last few ping responses
      const fileData = await fs.promises.readFile(filePath, "utf8");

      // Split the file data into lines and get the last 5 lines for review
      const lines = fileData.trim().split("\n");
      const lastFiveLines = lines.slice(-5);

      const isFailure = (line) => {
        return (
          line.includes("Destination host unreachable") ||
          !line.startsWith("Reply from")
        );
      };

      // Check if all the last 5 ping responses are failures (no reply from server)
      const allNoReply = lastFiveLines.every(isFailure);

      // If all last 5 pings failed, mark the error and send an email
      if (allNoReply) {
        if (data.error !== true) {
          // Only trigger if error status is not already set
          data.error = true; // Mark the IPTV entry as having an error
          await sendErrorEmail(data); // Send error email notification
        }
      } else {
        data.error = false; // Reset error flag if the server is responding
      }
    } catch (err) {
      console.error("An error occurred:", err); // Log any errors during execution
    }
  });
}

// Schedule a task to send log emails every Monday at 9 AM
cron.schedule("0 9 * * 1", () => {
  console.log("Sending email every Monday at 9 AM");
  sendLogToEmail(); // Trigger the log email function
});

// Set an interval to ping all IPTV addresses every second
setInterval(() => {
    networkData.forEach(pingAddress); // Iterate over the IPTV list and ping each address
}, 1000); // Run the ping task every 1000 milliseconds (1 second)
