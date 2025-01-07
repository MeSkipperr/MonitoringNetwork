const fs = require('fs');
const path = require('path');

/**
 * Reads and validates JSON files in a directory with flexible array contents.
 * @param {string} dirPath - The directory path containing JSON files.
 * @param {Object} schema - An object defining the expected structure and types.
 * @returns {Promise<Array>} An array of validated data objects.
 */
async function readAndValidateJsonFiles(dirPath, schema) {
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

                // Validate format using the provided schema
                if (
                    Array.isArray(data) &&
                    data.every(item =>
                        item &&
                        Object.entries(schema).every(([key, type]) => {
                            if (type === 'array') {
                                // If it's an array, check if it's an array, but don't validate the elements inside
                                return Array.isArray(item[key]);
                            }
                            return typeof item[key] === type;
                        })
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
