import Joi from "joi";

const login = {
  body: Joi.object().keys({
    emailOrUserId: Joi.string().required(),
    password: Joi.string().required(),
  }),
};

const register = {
  body: Joi.object().keys({
    name: Joi.string().required(),
    email: Joi.string().required().email(),
    userId: Joi.string().required(),
    password: Joi.string().required(),
    gender: Joi.bool().required(),
    birthday: Joi.string().required(),
  }),
};

const changePassword = {
  body: Joi.object().keys({
    currentPassword: Joi.string().required(),
    password: Joi.string().required(),
  }),
};

export { login, register, changePassword };
