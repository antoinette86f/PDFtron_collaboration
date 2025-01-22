import { Role } from "../../../models/index.js";
import dotenv from "dotenv";
import { v4 as uuidv4 } from "uuid";
import { Op } from "sequelize";
import { generateFilterQuery } from "../../utils/generateFilterQuery.js";

dotenv.config();

export const createRole = async (req, res) => {
  const { name, archived, color, signature } = req.body;
  const id = uuidv4();
  try {
    const sameRoles = await Role.findAndCountAll({
      where: {
        name: name,
      },
    });
    if (sameRoles.count > 0) {
      res.status(409).send({
        type: "warning",
        message: "toast_duplicated_role",
      });
    } else {
      await Role.create({
        id: uuidv4(),
        name,
        color,
        archived,
        signature,
      });
      res.status(200).send({
        id,
        name,
        color,
        archived,
        signature,
      });
    }
  } catch (err) {
    console.log("err=>", err);
    res.status(400).send({
      type: "error",
      message: "toast_create_user_role_failed",
    });
  }
};

export const getRoles = async (req, res) => {
  try {
    const { page, pageSize, filters, filtersOperator } = req.query;

    if (!pageSize || !page) {
      const roles = await Role.findAndCountAll();
      res.status(200).send(roles);
    } else if (filters && filters.length) {
      const where = [];
      filters.forEach((filter) => {
        const subOperator = generateFilterQuery(
          filter.operator,
          filter.value,
          filter.field,
        );
        let subWhere;
        switch (filter.field) {
          case "name":
            subWhere = { name: subOperator };
            break;
          case "archived":
            subWhere = { archived: subOperator };
            break;
          case "signature":
            subWhere = { signature: subOperator };
            break;
          case "createdAt":
            subWhere = { createdAt: subOperator };
            break;
          case "updatedAt":
            subWhere = { updatedAt: subOperator };
            break;
          default:
            subWhere = { name: subOperator };
        }
        where.push(subWhere);
      });
      const roles = await Role.findAndCountAll({
        where: {
          [filtersOperator === "or" && where.length > 1 ? Op.or : Op.and]:
            where,
        },
        offset: pageSize * page,
        limit: Number(pageSize),
        distinct: false,
      });
      res.status(200).send(roles);
    } else {
      const roles = await Role.findAndCountAll({
        offset: pageSize * page,
        limit: Number(pageSize),
        distinct: false,
      });
      res.status(200).send(roles);
    }
  } catch (err) {
    console.log("err=>", err);
    res.status(400).send({
      type: "error",
      message: "toast_load_user_roles_failed",
    });
  }
};

export const updateRole = async (req, res) => {
  const { id } = req.params;
  const { name, archived, color, signature } = req.body;
  const query = {
    where: { id: id },
  };
  try {
    const sameRoles = await Role.findAndCountAll({
      where: {
        name: name,
        id: {
          [Op.ne]: id,
        },
      },
    });
    if (sameRoles.count > 0) {
      res.status(409).send({
        type: "warning",
        message: "toast_duplicated_role",
      });
    } else {
      await Role.update(
        {
          name,
          color,
          archived,
          signature,
        },
        query,
      );
      res.status(200).send({
        name,
        color,
        archived,
        signature,
      });
    }
  } catch (err) {
    console.log("err=>", err);
    res.status(400).send({
      type: "error",
      message: "toast_update_user_role_failed",
    });
  }
};

export const deleteRole = async (req, res) => {
  const { id } = req.params;
  try {
    await Role.destroy({
      where: {
        id: id,
      },
    });
    res.status(200).send({
      type: "success",
      message: "toast_delete_user_role_success",
    });
  } catch (err) {
    console.log("err=>", err);
    res.status(400).send({
      type: "error",
      message: "toast_delete_user_role_failed",
    });
  }
};
