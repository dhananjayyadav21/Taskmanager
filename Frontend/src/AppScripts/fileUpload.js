function doPost(e) {
    try {
      // Validate API Key
      const API_KEY = "";
      const providedApiKey = e.parameter.apiKey;
      if (providedApiKey !== API_KEY) {
        throw new Error("Unauthorized: Invalid API key.");
      }
  
      // Parse request parameters
      const fileName = e.parameter.filename || "uploaded_file";
      const fileData = e.parameter.file;
  
      if (!fileData) {
        throw new Error("File data is missing.");
      }
  
      // Decode the file from base64
      const blob = Utilities.newBlob(Utilities.base64Decode(fileData), "application/octet-stream", fileName);
  
      // Save the file to Google Drive
      const folder = DriveApp.getFolderById(e.parameter.folderId??"");
      const file = folder.createFile(blob);
  
      return ContentService.createTextOutput(
        JSON.stringify({
          success: true,
          fileId: file.getId(),
          fileName: file.getName(),
          fileUrl: file.getUrl(),
        })
      ).setMimeType(ContentService.MimeType.JSON);
    } catch (error) {
      return ContentService.createTextOutput(
        JSON.stringify({
          success: false,
          error: error.message,
        })
      ).setMimeType(ContentService.MimeType.JSON);
    }
  }
  