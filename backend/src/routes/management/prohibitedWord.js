import { Router } from "express";

import {
  createProhibitedWord,
  getProhibitedWords,
  updateProhibitedWord,
  deleteProhibitedWord,
} from "../../controllers/management/prohibitedWord.js";

const router = Router();

router.get("/", getProhibitedWords);
router.post("/", createProhibitedWord);
router.put("/:id", updateProhibitedWord);
router.delete("/:id", deleteProhibitedWord);

export default router;
