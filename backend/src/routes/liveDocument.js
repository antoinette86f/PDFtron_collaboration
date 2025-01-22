import { Router } from "express";
import { uploadImageProduct } from "../util/multer.js";
import {
  uploadDocument,
  createDocument,
  getDocuments,
  getDocument,
  deleteDocument,
  updateDocument,
  getDocumentByPlanStage,
  getDocumentFile,
  getAnnotationsByDocument,
  getSingleDocument,
} from "../controllers/liveDocument.js";

const router = Router();

router.post("/upload", uploadImageProduct.single("file"), uploadDocument);
router.post("/create", uploadImageProduct.single("file"), createDocument);
router.get("/", getDocuments);
router.get("/url/:id", getSingleDocument);
router.get("/:id", getDocument);
router.get("/:id/annotations", getAnnotationsByDocument);
router.get("/:id/download", getDocumentFile);
router.get("/:planId/:stage", getDocumentByPlanStage);
router.put("/:id", updateDocument);
router.delete("/:id", deleteDocument);

export default router;
