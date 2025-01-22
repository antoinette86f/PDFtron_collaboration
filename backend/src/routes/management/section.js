import { Router } from "express";
import {
  createSection,
  deleteSection,
  getSections,
  updateSection,
} from "../../controllers/management/section.js";

const router = Router();

router.post("/", createSection);
router.get("/", getSections);
router.put("/:id", updateSection);
router.delete("/:id", deleteSection);

export default router;
