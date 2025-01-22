import { Router } from "express";

import {
  createPrescription,
  getPrescriptions,
  updatePrescription,
  deletePrescription,
  getPrescription,
} from "../controllers/prescription.js";

const router = Router();

router.get("/", getPrescriptions);
router.get("/:id", getPrescription);
router.post("/", createPrescription);
router.put("/:id", updatePrescription);
router.delete("/:id", deletePrescription);

export default router;
