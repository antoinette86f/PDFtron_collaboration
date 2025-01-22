import { Router } from "express";

import {
  createSubPlanType,
  getSubPlanTypes,
  updateSubPlanType,
  deleteSubPlanType,
  getAllSubPlanTypes,
} from "../../controllers/management/subPlanType.js";

const router = Router();

router.post("/", createSubPlanType);
router.get("/", getSubPlanTypes);
router.get("/all", getAllSubPlanTypes);
router.put("/:id", updateSubPlanType);
router.delete("/:id", deleteSubPlanType);

export default router;
