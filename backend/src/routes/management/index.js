import { Router } from "express";

import userRoutes from "./user.js";
import sectionRoutes from "./section.js";
import subSectionRoutes from "./subSection.js";
import planRoutes from "./plan.js";
import fixedPlanRoutes from "./fixedPlan.js";
import stageRoutes from "./stage.js";
import planTypeRoutes from "./planType.js";
import subPlanRoutes from "./subPlanType.js";
import generationLogRoutes from "./generationLog.js";
import userRoleRoutes from "./role.js";
import printRequestRoutes from "./printRequest.js";
import prohibitedWordRoutes from "./prohibitedWord.js";
import paperSizeRoutes from "./paperSizeType.js";

const router = Router();

router.use("/users", userRoutes);
router.use("/section", sectionRoutes);
router.use("/sub-section", subSectionRoutes);
router.use("/plan", planRoutes);
router.use("/fixed-plan", fixedPlanRoutes);
router.use("/stage", stageRoutes);
router.use("/plan-type", planTypeRoutes);
router.use("/sub-plan", subPlanRoutes);
router.use("/paper-size", paperSizeRoutes);
router.use("/generation-log", generationLogRoutes);
router.use("/user-role", userRoleRoutes);
router.use("/print-request", printRequestRoutes);
router.use("/prohibited-word", prohibitedWordRoutes);

export default router;
