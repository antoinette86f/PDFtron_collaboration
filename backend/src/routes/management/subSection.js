import { Router } from "express";
import {
  createSubSection,
  getSubSections,
  updateSubSection,
  deleteSubSection,
} from "../../controllers/management/subSection.js";

const router = Router();

router.post("/", createSubSection);
router.get("/", getSubSections);
router.put("/:id", updateSubSection);
router.delete("/:id", deleteSubSection);

export default router;
