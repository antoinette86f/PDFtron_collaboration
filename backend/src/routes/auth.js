import { Router } from "express";
import {
  login,
  getAccount,
  refreshToken,
  logout,
} from "../controllers/auth.js";
import { validate } from "../middlewares/validate.middleware.js";
import { validJWTNeeded } from "../middlewares/auth.middleware.js";
import * as authValidation from "../validation/auth.validation.js";
import { createUser, changePassword } from "../controllers/management/user.js";

const authRouter = Router();

authRouter.get("/", validJWTNeeded, getAccount);
authRouter.post("/login", validate(authValidation.login), login);
authRouter.post("/register", validate(authValidation.register), createUser);
authRouter.post("/refresh", refreshToken);
authRouter.post("/logout", validJWTNeeded, logout);
authRouter.put(
  "/change-password",
  validJWTNeeded,
  validate(authValidation.changePassword),
  changePassword,
);

export default authRouter;
