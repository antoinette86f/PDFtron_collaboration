import { Router } from "express";
import {
  createNotification,
  deleteNotification,
  markAllAsRead,
  readNotification,
  clearAllNotifications,
  getNotifications,
  getCountNotifications,
} from "../controllers/notification.js";

const router = Router();

router.get("/", getNotifications);
router.get("/count", getCountNotifications);
router.post("/create", createNotification);
router.put("/mark-read", markAllAsRead);
router.put("/:id", readNotification);
router.delete("/", clearAllNotifications);
router.delete("/:id", deleteNotification);

export default router;
