import { Router } from "express";
import { createComparison, getComparison } from "../controllers/comparison.js";

const router = Router();

router.post("/", createComparison);
router.get("/:id", getComparison);

export default router;
