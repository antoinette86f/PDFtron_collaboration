import { PlanType } from "../../../models/index.js";
import dotenv from "dotenv";
import { v4 as uuidv4 } from "uuid";
import { Op } from "sequelize";
import { generateFilterQuery } from "../../utils/generateFilterQuery.js";

dotenv.config();

export const createType = async (req, res) => {
  const { name, archived } = req.body;

  try {
    const sameTypes = await PlanType.findAndCountAll({
      where: {
        name: name,
      },
    });
    if (sameTypes.count > 0) {
      res.status(409).send({
        type: "warning",
        message: "toast_duplicated_plan_type",
      });
    } else {
      const id = uuidv4();
      await PlanType.create({
        id,
        name,
        archived,
      });
      res.status(200).send({
        id,
        name,
        archived,
      });
    }
  } catch (err) {
    console.log("err=>", err);
    res.status(400).send({
      type: "error",
      message: "toast_create_plan_type_failed",
    });
  }
};

export const getTypes = async (req, res) => {
  try {
    const { page, pageSize, filters, filtersOperator } = req.query;

    if (!pageSize || !page) {
      const planTypes = await PlanType.findAndCountAll();
      res.status(200).send(planTypes);
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
      const types = await PlanType.findAndCountAll({
        where: {
          [filtersOperator === "or" && where.length > 1 ? Op.or : Op.and]:
            where,
        },
        offset: pageSize * page,
        limit: Number(pageSize),
        distinct: false,
      });
      res.status(200).send(types);
    } else {
      const types = await PlanType.findAndCountAll({
        offset: pageSize * page,
        limit: Number(pageSize),
        distinct: false,
      });
      res.status(200).send(types);
    }
  } catch (err) {
    console.log("err=>", err);
    res.status(400).send({
      type: "error",
      message: "toast_load_plan_types_failed",
    });
  }
};

export const updateType = async (req, res) => {
  const { id } = req.params;
  const { name, archived } = req.body;

  const query = {
    where: { id: id },
  };
  try {
    const samePlanTypes = await PlanType.findAndCountAll({
      where: {
        name: name,
        id: {
          [Op.ne]: id, // Exclude the current item's id
        },
      },
    });
    if (samePlanTypes.count > 0) {
      res.status(409).send({
        type: "warning",
        message: "toast_duplicated_sub_plan_type",
      });
    } else {
      await PlanType.update({ name, archived }, query);
      res.status(200).send({
        id,
        name,
        archived,
      });
    }
  } catch (err) {
    console.log("err=>", err);
    res.status(400).send({
      type: "error",
      message: "toast_update_sub_plan_type_failed",
    });
  }
};

export const deleteType = async (req, res) => {
  const { id } = req.params;
  try {
    await PlanType.destroy({
      where: {
        id: id,
      },
    });
    res.status(200).send({
      type: "success",
      message: "toast_delete_plan_type_success",
    });
  } catch (err) {
    res.status(400).send({
      type: "error",
      message: "toast_delete_plan_type_failed",
    });
  }
};
