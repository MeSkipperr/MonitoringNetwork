const fs = require('fs');
const path = require('path');

async function readAndValidateJsonFiles(dirPath) {
    const validData = [];

    try {
        const files = fs.readdirSync(dirPath);

        for (const file of files) {
            const filePath = path.join(dirPath, file);

            // Skip if not a .json file
            if (path.extname(file) !== '.json') {
                console.log(`Skipping non-JSON file: ${file}`);
                continue;
            }

            try {
                const fileContent = fs.readFileSync(filePath, 'utf-8');
                const data = JSON.parse(fileContent);

                // Validate format
                if (
                    Array.isArray(data) &&
                    data.every(item =>
                        item &&
                        typeof item.name === 'string' &&
                        typeof item.ipAddress === 'string' &&
                        typeof item.device === 'string' &&
                        typeof item.error === 'boolean' &&
                        typeof item.description === 'string'
                    )
                ) {
                    validData.push(...data);
                } else {
                    console.log(`Invalid format in file: ${file}`);
                }
            } catch (err) {
                console.log(`Error processing file ${file}:`, err.message);
            }
        }
    } catch (err) {
        console.error('Error reading directory:', err.message);
    }

    return validData;
}

module.exports = readAndValidateJsonFiles;