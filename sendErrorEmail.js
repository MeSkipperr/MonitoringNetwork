const nodemailer = require('nodemailer');
require('dotenv').config();
const path = require('path');

const users = require("./user")

// Konfigurasi transporter nodemailer
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

// Fungsi untuk mengirim email
function sendErrorEmail(data) {
    users.forEach(user => {
        const filePath = path.join(__dirname, 'log', `${data.name}.txt`);
        const mailOptions = {
            from:  process.env.EMAIL_USER,
            to: user.email,
            subject: 'Switch IPTV Ping Error Notification',
            text: `
Dear ${user.middleName} ${user.lastName},

We would like to inform you that an error has occurred in the network system. Below are the details:

    - Switch Name: ${data.name}
    - IP Address: ${data.ipAddress}
    - Switch Device: ${data.switchDevice}
            
Kindly review the information provided and take necessary actions to resolve the issue at your earliest convenience.
            
Best regards,
Your Company
            `,
            attachments: {
                filename: `${data.name}.txt`,
                path: filePath
            }
        };
        
        transporter.sendMail(mailOptions, (err, info) => {
            if (err) {
            console.error('Failed to send email:', err);
            } else {
            console.log('Email sent:', info.response);
            }
        });
    });
}

module.exports = sendErrorEmail;