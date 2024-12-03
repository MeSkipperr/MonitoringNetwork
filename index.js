const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');
const cron = require('node-cron');

//Request Data
const listIPTV = require('./listIPTV');

//Send email function
const sendErrorEmail = require('./sendErrorEmail');
const sendLogToEmail = require('./sendLogToEmail');


function pingAddress(data) {
    exec(`ping ${data.ipAddress} -n 1`, (error, stdout, stderr) => {
        //Value while ping 
        const outputLines = stdout.split('\r\n');
        const logMessage = outputLines[2] || 'Request timed out.';
        console.log(logMessage);

        // Path file notepad
        const filePath = path.join(__dirname, 'log', `${data.name}.txt`);
        // Write file
        fs.appendFile(filePath, logMessage + '\n', (err) => {
            if (err) {
                console.error('Gagal menulis ke file:', err);
                return;
            }
        });

        // Read and Execute File
        fs.readFile(filePath, 'utf8', (err, fileData) => {
            if (err) {
                console.error('Error reading the file:', err);
                return;
            }

            const lines = fileData.trim().split('\n');
            const lastFiveLines = lines.slice(-5);
            const allNoReply = lastFiveLines.every(result => !result.startsWith('Reply from'));

            if (allNoReply) {
                if (data.error !== true) {
                    data.error = true; 
                    //send email
                    sendErrorEmail(data)
                }
            } else {
                data.error = false; 
            }
        });
    });
}



cron.schedule('0 9 * * 1', () => {
    console.log('Sending email every Monday at 9 AM');
    sendLogToEmail();
});


setInterval(() => {
    listIPTV.forEach(pingAddress); 
}, 1000); 
