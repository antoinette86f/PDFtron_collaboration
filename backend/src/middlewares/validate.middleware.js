import Joi from "joi";
import { pick } from "../utils/pick.js";

export const validate = (schema) => (req, res, next) => {
  const validSchema = pick(schema, ["params", "query", "body"]);

  const object = pick(req, Object.keys(validSchema));

  const { value, error } = Joi.compile(validSchema)
    .prefs({ errors: { label: "key" } })
    .validate(object);
  if (error) {
    const errorMessage = error.details
      .map((details) => details.message)
      .join(", ");
    return res.status(405).json({
      message: errorMessage,
    });
  }
  Object.assign(req, value);
  return next();
};
