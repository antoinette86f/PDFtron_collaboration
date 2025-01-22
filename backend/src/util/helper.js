import multer from "multer";
import path from "path";
import * as uuid from "uuid";
import fs from "fs";

export const isEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const getImageUploadConfig = (filePath) => {
  return {
    limits: { fileSize: 20 * 1024 * 1024 },
    storage: multer.diskStorage({
      destination: (req, file, next) => {
        const dir = path.join("public/uploads/", filePath);
        if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
        next(null, dir);
      },
      filename: (req, file, next) => {
        const ext = file.mimetype.split("/")[1];
        return next(null, `${uuid.v4()}-${Date.now()}.${ext}`);
      },
      fileFilter: (req, file, next) => {
        if (file.type.startsWith("image/")) {
          return next(null, true);
        }
        return new Error("invalid_avatar");
      },
    }),
  };
};
