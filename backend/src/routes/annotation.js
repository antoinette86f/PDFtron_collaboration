import { Router } from "express";
import {
  createAnnotation,
  deleteAnnotation,
  getAnnotation,
  getAnnotations,
  updateAnnotation,
} from "../controllers/annotation.js";

const router = Router();

router.get("/", getAnnotations);
router.get("/:id", getAnnotation);
router.post("/", createAnnotation);
router.put("/:id", updateAnnotation);
router.delete("/:id", deleteAnnotation);

export default router;
