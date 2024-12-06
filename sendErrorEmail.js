// Import necessary modules
const nodemailer = require('nodemailer'); // To send emails
require('dotenv').config(); // For loading environment variables from a .env file
const path = require('path'); // For handling file paths

// Import user data (list of users to send emails to)
const recipient = require("./auth/recipient");
const sender = require("./auth/sender");
const formatDate = require('./timeFormat');

// Configure the email transporter using Gmail service
const transporter = nodemailer.createTransport({
    service: 'gmail', // Using Gmail as the email service
    auth: {
        user: sender.EMAIL_USER, 
        pass: sender.EMAIL_PASS
    }
});

// Function to send an error notification email
async function sendErrorEmail(data) {
    // Iterate through each user to send the error notification
    for (const user of recipient) {
        // Define the path to the log file associated with the IPTV error
        const filePath = path.join(__dirname, 'log', `${data.name}.txt`);

        // Configure the email options
        const mailOptions = {
            from: sender.EMAIL_USER, // Sender's email (from .env)
            to: user.email, // Recipient's email (from the user data)
            subject: 'Switch IPTV Ping Error Notification', // Email subject
            text: `
Dear ${user.middleName} ${user.lastName},

We would like to inform you that an error has occurred in the network system. Below are the details:

    - Switch Name: ${data.name}
    - IP Address: ${data.ipAddress}
    - Switch Device: ${data.switchDevice}
    - Time : ${formatDate()}

Kindly review the information provided and take necessary actions to resolve the issue at your earliest convenience.

Best regards,
Courtyard by Marriott Bali Nusa Dua Resort
            `, // Email body with personalized information
            attachments: {
                filename: `${data.name}.txt`, // Attach the log file with the error details
                path: filePath // Path to the log file
            }
        };

        try {
            // Send the email with the defined options
            const info = await transporter.sendMail(mailOptions);
            console.log('Email sent:', info.response); // Log success response if email is sent
        } catch (err) {
            console.error('Failed to send email to:', user.email, 'Error:', err); // Log error if sending fails
        }
    }
}
// Export the sendErrorEmail function so it can be used in other modules
module.exports = sendErrorEmail;
