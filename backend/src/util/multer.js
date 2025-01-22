import multer from "multer";
import * as path from "path";
import * as fs from "fs";
import { fileURLToPath } from "url";

// Define a file filter for PDFs and images
const fileFilter = (req, file, cb) => {
  const validMimeTypes = ["application/pdf", "image/jpeg", "image/png"];

  if (validMimeTypes.includes(file.mimetype)) {
    cb(null, true); // Accept the file
  } else {
    cb(
      new Error("Invalid file type. Only PDF and image files are allowed!"),
      false,
    );
  }
};

const storageLiveDocuments = multer.diskStorage({
  destination: function (req, file, cb) {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const dirPathCreate = path.resolve(
      __dirname,
      "../../public/uploads/documents",
    );

    // Create new directory if it does not exist to save live documents
    if (!fs.existsSync(dirPathCreate)) {
      fs.mkdirSync(dirPathCreate, { recursive: true });
    }
    cb(null, dirPathCreate);
  },
  filename: function (req, file, cb) {
    const { documentId } = req.body;
    const extension = path.extname(file.originalname);
    const fileName = `${documentId}${extension}`;
    req.documentId = documentId;
    cb(null, fileName);
  },
});

// Configure multer to use the storage and filter
export const uploadImageProduct = multer({
  storage: storageLiveDocuments,
  fileFilter: fileFilter,
});
