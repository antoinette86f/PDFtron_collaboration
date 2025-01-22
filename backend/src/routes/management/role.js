import { Router } from "express";

import {
  createRole,
  getRoles,
  deleteRole,
  updateRole,
} from "../../controllers/management/role.js";

const router = Router();

router.post("/", createRole);
router.get("/", getRoles);
router.put("/:id", updateRole);
router.delete("/:id", deleteRole);

export default router;
