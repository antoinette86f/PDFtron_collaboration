import { User } from "../../../models/index.js";
import bcrypt from "bcrypt";
import { Op } from "sequelize";
import { v4 as uuidv4 } from "uuid";
import { isEmail } from "../../util/helper.js";
import { generateFilterQuery } from "../../utils/generateFilterQuery.js";
import fs from "fs";

export const getUsers = async (req, res) => {
  try {
    const { pageSize = 0, page = 0, filters, filtersOperator } = req.query;

    if (filters && filters.length) {
      const where = [];
      filters.forEach((filter) => {
        const subOperator = generateFilterQuery(
          filter.operator,
          filter.value,
          filter.field,
        );
        let subWhere;
        switch (filter.field) {
          case "userId":
            subWhere = { userId: subOperator };
            break;
          case "name":
            subWhere = { name: subOperator };
            break;
          case "email":
            subWhere = { email: subOperator };
            break;
          case "role":
            subWhere = { "$role.name$": subOperator };
            break;
          case "section":
            subWhere = { "$section.name$": subOperator };
            break;
          case "subsection":
            subWhere = { "$subsection.name$": subOperator };
            break;
          case "activated":
            subWhere = { activated: subOperator };
            break;
          default:
            subWhere = { name: subOperator };
        }
        where.push(subWhere);
      });
      const users = await User.findAndCountAll({
        where: {
          [filtersOperator === "or" && where.length > 1 ? Op.or : Op.and]:
            where,
        },
        include: ["section", "subsection", "role"],
        offset: pageSize * page,
        limit: pageSize ? Number(pageSize) : undefined,
        distinct: false,
        attributes: { exclude: ["password"] },
      });
      res.status(200).send(users);
    } else {
      const users = await User.findAndCountAll({
        include: ["section", "subsection", "role"],
        offset: pageSize * page,
        limit: pageSize ? Number(pageSize) : undefined,
        distinct: false,
        attributes: { exclude: ["password"] },
      });
      res.status(200).send(users);
    }
  } catch (err) {
    console.log("err=>", err);
    res.status(400).send({
      type: "error",
      message: "toast_load_users_failed",
    });
  }
};

export const getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findOne({
      where: {
        id: id,
      },
      include: ["section", "subsection", "role", "avatarUrl"],
      attributes: { exclude: ["password"] },
    });
    res.status(200).send(user);
  } catch (err) {
    console.log("err=>", err);
    res.status(400).send({
      type: "error",
      message: "toast_load_users_failed",
    });
  }
};

export const createUser = async (req, res) => {
  try {
    const {
      userId,
      name,
      email,
      password,
      sectionId,
      subsectionId,
      roleId,
      birthday,
      gender,
    } = req.body;

    const sameIdUsers = await User.findAndCountAll({
      where: { userId: userId },
    });

    let sameEmailUsers;
    if (email) {
      sameEmailUsers = await User.findAndCountAll({
        where: { email: email },
      });
    }

    if (sameIdUsers?.count > 0) {
      res.status(409).send({
        type: "warning",
        message: "toast_userid_duplicated",
      });
    } else if (sameEmailUsers?.count > 0) {
      res.status(409).send({
        type: "warning",
        message: "toast_email_duplicated",
      });
    } else {
      // Create user
      await User.create({
        id: uuidv4(),
        userId,
        name,
        email,
        password: bcrypt.hashSync(password, 10),
        sectionId,
        subsectionId,
        roleId,
        activated: false,
        birthday,
        gender,
      });

      res.status(200).send({
        type: "success",
        message: "toast_create_user_success",
      });
    }
  } catch (err) {
    console.log("err=>", err);
    res.status(400).send({
      type: "error",
      message: "toast_create_user_failed",
    });
  }
};

export const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      userId,
      name,
      email,
      sectionId,
      subsectionId,
      roleId,
      activated,
      birthday,
      gender,
    } = req.body;

    const sameEmailUsers = await User.findAndCountAll({
      where: {
        email: email,
        id: {
          [Op.ne]: id,
        },
      },
    });

    if (sameEmailUsers?.count > 0) {
      res.status(409).send({
        type: "warning",
        message: "toast_email_duplicated",
      });
    } else {
      const query = {
        where: { id: id },
      };

      await User.update(
        {
          userId,
          name,
          email,
          sectionId,
          subsectionId,
          roleId,
          activated,
          birthday,
          gender,
        },
        query,
      );

      res.status(200).send({
        type: "success",
        message: "toast_update_user_success",
      });
    }
  } catch (err) {
    res.status(400).send({
      type: "error",
      message: "toast_update_user_failed",
    });
  }
};

export const findLoginUser = async (emailOrUserId) => {
  let condition = { email: emailOrUserId };
  if (!isEmail(emailOrUserId)) {
    condition = { userId: emailOrUserId };
  }

  return await User.findOne({
    where: condition,
  });
};

export const resetPassword = async (req, res) => {
  const { id } = req.params;
  const password = bcrypt.hashSync("12345678", 10);

  const query = {
    where: { id: id },
  };

  try {
    await User.update({ password }, query);

    res.status(200).send({
      type: "success",
      message: "toast_reset_password_success",
    });
  } catch (err) {
    console.log("err=>", err);
    res.status(400).send({
      type: "error",
      message: "toast_reset_password_failed",
    });
  }
};

export const deleteUser = async (req, res) => {
  const { id } = req.params;

  try {
    await User.destroy({
      where: { id: id },
    });

    res.status(200).send({
      type: "success",
      message: "toast_delete_user_success",
    });
  } catch (err) {
    console.log("err=>", err);
    res.status(400).send({
      type: "error",
      message: "toast_delete_user_failed",
    });
  }
};

export const uploadAvatar = async (req, res) => {
  try {
    const id = req.params.id;
    const imageTypes =
      /image\/bmp|image\/jpeg|image\/jpg|image\/png|image\/svg\+xml|image\/webp/i;
    if (!imageTypes.test(req.file.mimetype)) {
      res.status(400).send({
        type: "error",
        message: "invalid_avatar",
      });
    } else {
      const currentUser = await User.findOne({ where: { id: id } });
      const originAvatarUrl = currentUser.avatarUrl;
      if (originAvatarUrl) {
        fs.unlink(originAvatarUrl, (err) => {
          if (err) {
            console.error(err);
          }
        });
      }

      await currentUser.update({ avatarUrl: req.file.path });

      res.status(200).send(req.file);
    }
  } catch (err) {
    res.status(400).send({
      type: "error",
      message: "toast_upload_avatar_failed",
    });
  }
};

export const removeAvatar = async (req, res) => {
  try {
    const id = req.params.id;
    const query = {
      where: { id: id },
    };

    const currentUser = await User.findOne({ where: { id: id } });
    const originAvatarUrl = currentUser.avatarUrl;
    if (originAvatarUrl) {
      fs.unlink(originAvatarUrl, (err) => {
        if (err) {
          console.error(err);
        }
      });
    }
    await currentUser.update({ avatarUrl: null });

    res.status(200).send({
      type: "success",
      message: "toast_remove_avatar_success",
    });
  } catch (err) {
    res.status(400).send({
      type: "error",
      message: "toast_remove_avatar_failed",
    });
  }
}

export const changePassword = async (req, res) => {
  const { email } = req.user;
  const { currentPassword, password } = req.body;

  try {
    const user = await findLoginUser(email);

    if (!user || !bcrypt.compareSync(currentPassword, user.password)) {
      return res.status(401).send({
        type: "error",
        message: "toast_reset_password_failed",
      });
    }

    await User.update(
      { password: bcrypt.hashSync(password, 10) },
      { where: { id: user.id } },
    );

    return res.status(200).send({
      type: "success",
      message: "toast_reset_password_success",
    });
  } catch (err) {
    return res.status(400).send({
      type: "error",
      message: "toast_reset_password_failed",
    });
  }
};

//#endregion
