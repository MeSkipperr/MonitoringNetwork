const nodemailer = require('nodemailer');
const fs = require('fs');
const path = require('path');

// Example data from listIPTV
const listIPTV = require("./listIPTV")
const users = require("./user")


// Create the transporter for nodemailer
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

// Send the email with attachments
const sendLogToEmail = async () => {
    for (const user of users) {  // Using a for...of loop to await async actions
        const attachments = listIPTV.map(data => {
            const filePath = path.join(__dirname, 'log', `${data.name}.txt`);
            return {
                filename: `${data.name}.txt`,
                path: filePath
            };
        });

        const mailOptions = {
            from:  process.env.EMAIL_USER,
            to: user.email,
            subject: 'Weekly Switch IPTV Log',
            text: `
Dear ${user.middleName} ${user.lastName},
    
I hope this message finds you well. Please find attached the weekly log for the IPTV switch.

Best regards,
Your Company
                `,
            attachments: attachments
        };

        try {
            const info = await transporter.sendMail(mailOptions);
            console.log('Email sent:', info.response);
        } catch (error) {
            console.log('Error sending email:', error);
        }
    }
};

module.exports = sendLogToEmail;
