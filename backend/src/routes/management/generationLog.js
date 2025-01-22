import { Router } from "express";
import {
  clearLogs,
  getLogs,
} from "../../controllers/management/generationLog.js";

const router = Router();

router.get("/", getLogs);
router.delete("/", clearLogs);

export default router;
