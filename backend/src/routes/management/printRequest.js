import { Router } from "express";

import {
  createPrintRequest,
  getPrintRequests,
  updatePrintRequest,
  deletePrintRequest,
  getPrintLogs,
} from "../../controllers/management/printRequest.js";

const router = Router();

router.get("/print-logs", getPrintLogs);
router.get("/", getPrintRequests);
router.post("/", createPrintRequest);
router.put("/:id", updatePrintRequest);
router.delete("/:id", deletePrintRequest);

export default router;
