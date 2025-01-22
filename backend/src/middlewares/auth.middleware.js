import jwt from "jsonwebtoken";
import { jwtSecret } from "../controllers/auth.js";

export const validJWTNeeded = (req, res, next) => {
  if (req.headers.authorization) {
    try {
      const authorization = req.headers.authorization.split(" ");
      if (authorization[0] !== "Bearer") {
        res.status(401).send();
      } else {
        req.user = jwt.verify(authorization[1], jwtSecret);
        return next();
      }
    } catch (err) {
      res.status(403).send({
        type: "error",
        message: "toast_invalid_token",
      });
    }
  } else {
    res.status(401).send();
  }
};
