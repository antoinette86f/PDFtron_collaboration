import { Router } from "express";
import multer from "multer";
import {
  createUser,
  getUsers,
  updateUser,
  resetPassword,
  deleteUser,
  uploadAvatar,
  removeAvatar,
} from "../../controllers/management/user.js";
import { getImageUploadConfig } from "../../util/helper.js";

//create router for object: produce
const router = Router();
const uploadImage = (path) => multer(getImageUploadConfig(path));

router.get("/", getUsers);
router.post("/", createUser);
router.post(
  "/upload-avatars/:id",
  uploadImage("avatars/").single("file"),
  uploadAvatar,
);
router.post("/remove-avatars/:id", removeAvatar);
router.put("/:id", updateUser);
router.put("/reset-password/:id", resetPassword);
router.delete("/:id", deleteUser);

export default router;
