const { Client } = require('ssh2');
const fs = require('fs');
const path = require('path');

const readAndValidateJsonFiles = require("../getJsonData")

// SSH credentials
const sshUsername = ''; // Replace with the appropriate username
const sshPassword = ''; // Replace with the appropriate password

/**
 * Fetch system information from devices and write the output to a file.
 * @param {Array} devices - Array of device information (name, IP, type, etc.).
 * @param {Array} commandList - Array of commands specific to device types.
 * @param {string} fileName - The file name to save the output. Defaults to 'environment_info.txt'.
 */
const fetchSystemInformation = async (devices, fileName = 'Device _Information_txt') => {
    // Clear the file content if it already exists
    if (fs.existsSync(fileName)) {
        fs.writeFileSync(fileName, ''); // Clear file content
        console.log(`File ${fileName} already exists. Content cleared.`);
    }
    const schema = {
        device: 'string',
        username:"string",
        password:"string",
        command:"array"
    };
    
    const dirPath = path.join(__dirname, 'device');
    const commandList = await readAndValidateJsonFiles(dirPath,schema)
    /**
     * Execute an SSH command on a device.
     * @param {string} cmd - The command to execute.
     * @param {object} conn - SSH connection object.
     * @param {object} device - Device details (name, IP, etc.).
     * @returns {Promise<string>} - Promise resolving to the command output.
     */
    const executeSSHCommand = (cmd, conn, device) => {
        return new Promise((resolve, reject) => {
            conn.exec(cmd, { execTimeout: 15000 }, (err, stream) => {
                if (err) {
                    reject(`Error executing command: ${cmd} on ${device.name}`);
                }

                let output = `\n\nDevice: ${device.name} (${device.type})\nIP Address: ${device.ipAddress}\nCommand: ${cmd}\n`;
                stream
                    .on('close', (code, signal) => {
                        console.log(`Command executed: ${cmd}`);
                        resolve(output);
                    })
                    .on('data', (data) => {
                        output += data.toString();
                    })
                    .stderr.on('data', (data) => {
                        reject(`Error: ${data.toString()}`);
                    });
            });
        });
    };

    // Iterate over each device in the list
    devices.forEach((device) => {
        const deviceConfig = commandList.find((config) => config.device === device.type);

        if (!deviceConfig) {
            console.log(`Device type ${device.type} not found in the command list.`);
            return;
        }

        // Establish SSH connection to the device
        const conn = new Client();
        conn
            .on('ready', async () => {
                console.log(`SSH connection established for ${device.name}`);

                try {
                    for (const cmd of deviceConfig.commands) {
                        const output = await executeSSHCommand(cmd, conn, device);
                        // Append output to the file
                        fs.appendFile(fileName, output, (err) => {
                            if (err) {
                                console.error('Error writing to file:', err);
                            } else {
                                console.log(`Output for ${device.name} appended to ${fileName}`);
                            }
                        });
                    }
                    conn.end();
                } catch (err) {
                    console.error(`Error during command execution for ${device.name}:`, err);
                    // Log error to the file
                    const errorLog = `\n\nDevice: ${device.name} (${device.type})\nIP Address: ${device.ipAddress}\nERROR : ${err}\n`;
                    fs.appendFile(fileName, errorLog, (err) => {
                        if (err) {
                            console.error('Error writing error log to file:', err);
                        } else {
                            console.log(`Error for ${device.name} logged to ${fileName}`);
                        }
                    });
                }
            })
            .on('error', (err) => {
                console.error(`SSH connection error for ${device.name}:`, err);
                // Log connection error to the file
                const errorLog = `\n\nDevice: ${device.name} (${device.type})\nIP Address: ${device.ipAddress}\nERROR : ${err}\n`;
                fs.appendFile(fileName, errorLog, (err) => {
                    if (err) {
                        console.error('Error writing error log to file:', err);
                    } else {
                        console.log(`Error for ${device.name} logged to ${fileName}`);
                    }
                });
            })
            .on('end', () => {
                console.log(`SSH connection closed for ${device.name}`);
            })
            .connect({
                host: device.ipAddress,
                port: 22,
                username: sshUsername,
                password: deviceConfig.password || sshPassword,
            });
    });
};

module.exports = fetchSystemInformation;
