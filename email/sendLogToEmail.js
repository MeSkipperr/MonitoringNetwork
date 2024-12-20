const { google } = require("googleapis");
const nodemailer = require("nodemailer");
const fs = require("fs");
const path = require("path");
const ipTV = require("../device/ipTV");
const recipient = require("../auth/recipient");
const sender = require("../auth/sender");

// Initialize Google Drive API
const auth = new google.auth.GoogleAuth({
  keyFile: "./auth/gdriveauth.json", // Replace with your credentials file path
  scopes: ["https://www.googleapis.com/auth/drive"],
});
const drive = google.drive({ version: "v3", auth });

// Email transporter setup
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: sender.EMAIL_USER,
    pass: sender.EMAIL_PASS,
  },
});

// Find folder in Drive by name
const findFolderInDrive = async (folderName) => {
  const response = await drive.files.list({
    q: `name='${folderName}' and mimeType='application/vnd.google-apps.folder' and trashed=false`,
    fields: "files(id, name)",
  });
  return response.data.files.length > 0 ? response.data.files[0].id : null;
};

// Create a folder in Drive
const createFolder = async (folderName) => {
  const response = await drive.files.create({
    resource: {
      name: folderName,
      mimeType: "application/vnd.google-apps.folder",
    },
    fields: "id",
  });
  console.log(`Folder created: ${folderName}`);
  return response.data.id;
};

// Set folder permission to "anyone with the link"
const setFolderPermission = async (folderId) => {
  await drive.permissions.create({
    fileId: folderId,
    requestBody: {
      role: "reader",
      type: "anyone",
    },
  });
  console.log(`Permission granted for folder ID: ${folderId}`);
};

// Find files in Drive by name and parent folder
const findFileInFolder = async (folderId, fileName) => {
  const response = await drive.files.list({
    q: `name='${fileName}' and '${folderId}' in parents and trashed=false`,
    fields: "files(id, name)",
  });
  return response.data.files;
};

// Delete file in Drive by ID
const deleteFileInDrive = async (fileId) => {
  await drive.files.delete({ fileId });
  console.log(`Deleted file ID: ${fileId}`);
};

// Upload a file to a folder in Drive (with replacement if exists)
const uploadFileToFolder = async (filePath, fileName, folderId) => {
  // Check if a file with the same name exists
  const existingFiles = await findFileInFolder(folderId, fileName);

  // Delete existing files
  if (existingFiles.length > 0) {
    console.log(`Deleting old file: ${fileName}`);
    await Promise.all(existingFiles.map((file) => deleteFileInDrive(file.id)));
  }

  // Upload the new file
  const fileMetadata = {
    name: fileName,
    parents: [folderId], // Specify the folder to upload into
  };
  const media = { mimeType: "text/plain", body: fs.createReadStream(filePath) };

  const response = await drive.files.create({
    resource: fileMetadata,
    media: media,
    fields: "id, webViewLink",
  });

  console.log(`Uploaded file: ${fileName}`);
  return response.data;
};

// Upload files to a folder and create the folder if it doesn't exist
const uploadFilesToDriveFolder = async (folderName, files) => {
  let folderId = await findFolderInDrive(folderName);

  // Create folder if it doesn't exist
  if (!folderId) {
    folderId = await createFolder(folderName);
    await setFolderPermission(folderId);
  }

  // Upload files to the folder
  const uploadedFiles = await Promise.all(
    files.map((file) => uploadFileToFolder(file.path, file.name, folderId))
  );

  return { folderId, uploadedFiles };
};

// Send the email with the folder link
const sendLogToEmail = async () => {
  try {
    // Define files to upload
    const files = ipTV.map((data) => ({
      path: path.join(__dirname, "log", `${data.name}.txt`),
      name: `${data.name}.txt`,
    }));

    // Upload files to a single folder
    const folderName = "Switch Weekly Logs ";
    const { folderId, uploadedFiles } = await uploadFilesToDriveFolder(
      folderName,
      files
    );

    // Get the folder link
    const folderLink = `https://drive.google.com/drive/folders/${folderId}`;

    // Send email to each recipient
    for (const user of recipient) {
      const mailOptions = {
        from: sender.EMAIL_USER,
        to: user.email,
        subject: "Weekly Switch Log",
        text: `
Dear ${user.middleName} ${user.lastName},

I hope this message finds you well. The weekly logs for the switches have been uploaded. You can access all the files using the link below:

Folder Link: ${folderLink}

Best regards,
Courtyard by Marriott Bali Nusa Dua Resort
        `,
      };

      const info = await transporter.sendMail(mailOptions);
      console.log(`Email sent to ${user.email}: ${info.response}`);
    }
  } catch (error) {
    console.error("Error:", error);
  }
};

module.exports = sendLogToEmail;
