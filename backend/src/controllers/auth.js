import jwt from "jsonwebtoken";
import moment from "moment";
import { findLoginUser, createUser } from "./management/user.js";
import bcrypt from "bcrypt";
import { v4 as uuidv4 } from "uuid";
import { Token, User } from "../../models/index.js";

export const jwtSecret = "jwt-secrete";

export const login = async (req, res) => {
  try {
    const { emailOrUserId, password } = req.body;
    const user = await findLoginUser(emailOrUserId);

    if (!user || !bcrypt.compareSync(password, user.password)) {
      res.status(401).send({
        type: "error",
        message: "toast_login_invalid",
      });
    } else if (!user.activated) {
      res.status(401).send({
        type: "error",
        message: "deactivate_user",
      });
    } else {
      const tokens = await generateAuthTokens(user);
      res.status(201).send(tokens);
    }
  } catch (err) {
    res.status(400).send({
      type: "error",
      message: "toast_login_failed",
    });
  }
};

export const register = async (req, res) => {
  try {
    await createUser(req.body);
    res.status(200).send({
      type: "success",
      message: "toast_register_success",
    });
  } catch (err) {
    console.log("err=>", err);
    res.status(400).send({
      type: "error",
      message: "toast_register_failed",
    });
  }
};

export const getAccount = async (req, res) => {
  const user = await User.findOne({
    where: {
      id: req.user.id,
    },
    include: ["role"],
  });
  res.status(200).send({
    account: user,
  });
};

export const refreshToken = async (req, res) => {
  const { refreshToken } = req.body;
  try {
    const tokenDoc = await Token.findOne({
      where: { type: "refresh-token", token: refreshToken },
      include: ["user"],
    });
    if (!tokenDoc) {
      res.status(400).send({
        type: "error",
        message: "toast_invalid_token",
      });
    } else if (new Date(tokenDoc.expiredAt).getTime() < new Date().getTime()) {
      res.status(400).send({
        type: "error",
        message: "toast_expired_token",
      });
    } else if (!tokenDoc.user) {
      res.status(400).send({
        type: "error",
        message: "toast_wrong_user_token",
      });
    } else {
      const user = tokenDoc.user;
      await tokenDoc.destroy();
      const tokens = await generateAuthTokens(user);
      res.status(200).send(tokens);
    }
  } catch (err) {
    console.log("err=>", err);
    res.status(400).send({
      type: "error",
      message: "toast_register_failed",
    });
  }
};

export const generateAuthTokens = async (user) => {
  const accessToken = jwt.sign(
    {
      name: user.name,
      email: user.email,
      id: user.id,
      role: user.roleId,
    },
    jwtSecret,
    { expiresIn: "30min" },
  );
  const refreshToken = jwt.sign(
    {
      name: user.name,
      email: user.email,
      id: user.id,
      role: user.roleId,
    },
    jwtSecret,
    { expiresIn: "1h" },
  );
  const expiredAt = moment().add(1, "hour").toDate();

  await Token.create({
    id: uuidv4(),
    type: "refresh-token",
    token: refreshToken,
    userId: user.id,
    expiredAt,
  });

  return {
    accessToken,
    refreshToken,
  };
};

export const logout = async (req, res) => {
  await Token.destroy({
    where: { userId: req.user.id, type: "refresh-token" },
  });
  res.status(200).send({
    type: "success",
    message: "toast_log_out_success",
  });
};
