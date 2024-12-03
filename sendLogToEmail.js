// Import necessary modules
const nodemailer = require('nodemailer'); // For sending emails
const fs = require('fs'); // For interacting with the file system (used for file paths, but not directly needed here)
const path = require('path'); // For handling file paths in a cross-platform way

// Import example data (IPTV switches list and user details)
const listIPTV = require("./listIPTV"); // List of IPTV switches
const users = require("./user"); // List of users to send the emails to

// Create the transporter using Gmail service and credentials from environment variables
const transporter = nodemailer.createTransport({
    service: 'gmail', // Using Gmail as the email service
    auth: {
        user: process.env.EMAIL_USER, // Your email user (loaded from the .env file)
        pass: process.env.EMAIL_PASS  // Your email password (loaded from the .env file)
    }
});

// Function to send the weekly log email to users
const sendLogToEmail = async () => {
    // Loop through each user to send them an email
    for (const user of users) {  // Using a for...of loop to await async actions
        // Prepare the list of attachments (log files for each IPTV switch)
        const attachments = listIPTV.map(data => {
            // Get the file path for the log file associated with the IPTV switch
            const filePath = path.join(__dirname, 'log', `${data.name}.txt`);
            return {
                filename: `${data.name}.txt`, // Name of the attachment
                path: filePath // Path to the log file
            };
        });

        // Define the mail options (subject, text, and attachments)
        const mailOptions = {
            from: process.env.EMAIL_USER, // Sender's email (from the environment variable)
            to: user.email, // Recipient's email (from the user data)
            subject: 'Weekly Switch IPTV Log', // Email subject
            text: `
Dear ${user.middleName} ${user.lastName},

I hope this message finds you well. Please find attached the weekly log for the IPTV switch.

Best regards,
Your Company
            `, // Email body text with personalized message
            attachments: attachments // Attach all the log files
        };

        // Attempt to send the email and log the result
        try {
            const info = await transporter.sendMail(mailOptions); // Send the email asynchronously
            console.log('Email sent:', info.response); // Log the success response
        } catch (error) {
            console.log('Error sending email:', error); // Log any errors during email sending
        }
    }
};

// Export the sendLogToEmail function for use in other modules
module.exports = sendLogToEmail;
