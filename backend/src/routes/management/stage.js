import { Router } from "express";

import {
  createStage,
  getStages,
  updateStage,
  deleteStage,
  updateAllStages,
} from "../../controllers/management/stage.js";

const router = Router();

router.post("/", createStage);
router.get("/", getStages);
router.put("/update-all", updateAllStages);
router.put("/:id", updateStage);
router.delete("/:id", deleteStage);

export default router;
