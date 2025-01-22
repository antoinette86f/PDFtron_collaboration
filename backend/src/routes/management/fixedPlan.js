import { Router } from "express";
import {
  createFixedPlan,
  getFixedPlans,
  getFixedPlan,
  updateFixedPlan,
  deleteFixedPlan,
} from "../../controllers/management/fixedPlan.js";

const router = Router();

router.post("/", createFixedPlan);
router.get("/", getFixedPlans);
router.get("/:id", getFixedPlan);
router.put("/:id", updateFixedPlan);
router.delete("/:id", deleteFixedPlan);

export default router;
