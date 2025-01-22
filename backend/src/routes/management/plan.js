import { Router } from "express";

import {
  createPlan,
  getPlans,
  getAllPlans,
  getPlan,
  updatePlan,
  deletePlan,
  getProgressPlans,
  generatePlans,
} from "../../controllers/management/plan.js";
import { validJWTNeeded } from "../../middlewares/auth.middleware.js";

const router = Router();

router.post("/", createPlan);
router.post("/generate", generatePlans);
router.get("/", getPlans);
router.get("/all", getAllPlans);
router.get("/progressing", validJWTNeeded, getProgressPlans);
router.get("/:id", getPlan);
router.put("/:id", updatePlan);
router.delete("/:id", deletePlan);

export default router;
