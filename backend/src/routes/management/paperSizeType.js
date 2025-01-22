import { Router } from "express";

import {
  createPaperSize,
  getPaperSizes,
  updatePaperSize,
  deletePaperSize,
} from "../../controllers/management/paperSize.js";

const router = Router();

router.post("/", createPaperSize);
router.get("/", getPaperSizes);
router.put("/:id", updatePaperSize);
router.delete("/:id", deletePaperSize);

export default router;
