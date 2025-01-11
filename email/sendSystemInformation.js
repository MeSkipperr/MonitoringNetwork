// Import necessary modules
const nodemailer = require("nodemailer"); // To send emails
require("dotenv").config(); // For loading environment variables from a .env file
const path = require("path");

// Import user data (list of users to send emails to)
const recipient = require("../auth/recipient");
const sender = require("../auth/sender");

// Configure the email transporter using Gmail service
const transporter = nodemailer.createTransport({
  service: "gmail", // Using Gmail as the email service
  auth: {
    user: sender.EMAIL_USER,
    pass: sender.EMAIL_PASS,
  },
});

// Function to send an error notification email
async function sendSystemInformation() {
  const filePath = path.join(__dirname, "Device_Information.txt");
  // Iterate through each user to send the error notification
  for (const user of recipient) {
    // Define the path to the log file associated with the IPTV error

    // Configure the email options
    const mailOptions = {
      from: sender.EMAIL_USER, // Sender's email (from .env)
      to: user.email, // Recipient's email (from the user data)
      subject: "Notification of Network Device Status - Error Detected", // Email subject
      text: `
Dear ${user.middleName} ${user.lastName},

The attached report contains detailed information about the current status of devices in the network. This information has been generated to help identify and address potential issues within the system.

Best regards,
Courtyard by Marriott Bali Nusa Dua Resort
            `, // Email body with personalized information
      attachments: [
        {
          filename: "Device_Information.txt", // Nama file dalam email
          path: filePath, // Path ke file
        },
      ],
    };

    try {
      // Send the email with the defined options
      const info = await transporter.sendMail(mailOptions);
      console.log("Email sent:", info.response); // Log success response if email is sent
    } catch (err) {
      console.error("Failed to send email to:", user.email, "Error:", err); // Log error if sending fails
    }
  }
}
// Export the sendSystemInformation function so it can be used in other modules
module.exports = sendSystemInformation;
