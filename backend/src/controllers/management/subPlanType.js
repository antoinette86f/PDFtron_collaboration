import { SubPlanType } from "../../../models/index.js";
import dotenv from "dotenv";
import { v4 as uuidv4 } from "uuid";
import { Op } from "sequelize";
import { generateFilterQuery } from "../../utils/generateFilterQuery.js";

dotenv.config();

export const createSubPlanType = async (req, res) => {
  const { name, planTypeId, archived } = req.body;

  try {
    const sameSubPlanTypes = await SubPlanType.findAndCountAll({
      where: {
        name: name,
      },
    });
    if (sameSubPlanTypes.count > 0) {
      res.status(409).send({
        type: "warning",
        message: "toast_duplicated_sub_plan_type",
      });
    } else {
      const id = uuidv4();
      await SubPlanType.create({
        id,
        name,
        planTypeId,
        archived,
      });
      res.status(200).send({
        id,
        name,
        planTypeId,
        archived,
      });
    }
  } catch (err) {
    console.log("err=>", err);
    res.status(400).send({
      type: "error",
      message: "toast_create_sub_plan_type_failed",
    });
  }
};

export const getSubPlanTypes = async (req, res) => {
  try {
    const { id, page, pageSize, filters, filtersOperator } = req.query;

    if (!pageSize || !page) {
      const subPlanTypes = await SubPlanType.findAndCountAll();
      res.status(200).send(subPlanTypes);
    } else if (filters && filtersOperator) {
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
          case "planTypeId":
            subWhere = { planTypeId: subOperator };
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

      const subTypes = await SubPlanType.findAndCountAll({
        where: {
          [filtersOperator === "or" && where.length > 1 ? Op.or : Op.and]:
            where,
        },
        offset: pageSize * page,
        limit: Number(pageSize),
        distinct: false,
      });
      res.status(200).send(subTypes);
    } else {
      const subTypes = await SubPlanType.findAndCountAll({
        where: {
          planTypeId: id,
        },
        offset: pageSize * page,
        limit: Number(pageSize),
        distinct: false,
      });
      res.status(200).send(subTypes);
    }
  } catch (err) {
    console.log("err=>", err);
    res.status(400).send({
      type: "error",
      message: "toast_load_sub_plan_types_failed",
    });
  }
};

export const getAllSubPlanTypes = async (req, res) => {
  try {
    const subPlanTypes = await SubPlanType.findAndCountAll();
    res.status(200).send(subPlanTypes);
  } catch (err) {
    console.log("err=>", err);
    res.status(400).send({
      type: "error",
      message: "toast_load_sub_plan_types_failed",
    });
  }
};

export const getSubPlanTypeById = async (req, res) => {
  const subPlanTypeId = req.query.id;
  try {
    const subPlanType = await SubPlanType.findOne({
      where: {
        id: subPlanTypeId,
      },
    });
    res.status(200).send(subPlanType);
  } catch (err) {
    console.log("err=>", err);
    res.status(400).send({
      type: "error",
      message: "toast_load_sub_plan_types_failed",
    });
  }
};

export const updateSubPlanType = async (req, res) => {
  const { id } = req.params;
  const { name, archived } = req.body;
  const query = {
    where: { id: id },
  };
  try {
    const sameSubPlanTypes = await SubPlanType.findAndCountAll({
      where: {
        name: name,
        id: {
          [Op.ne]: id, // Exclude the current item's id
        },
      },
    });
    if (sameSubPlanTypes.count > 0) {
      res.status(409).send({
        type: "warning",
        message: "toast_duplicated_sub_plan_type",
      });
    } else {
      await SubPlanType.update({ name, archived }, query);
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

export const deleteSubPlanType = async (req, res) => {
  const { id } = req.params;
  try {
    await SubPlanType.destroy({
      where: {
        id: id,
      },
    });
    res.status(200).send({
      type: "success",
      message: "toast_delete_sub_plan_type_success",
    });
  } catch (err) {
    console.log("err=>", err);
    res.status(400).send({
      type: "error",
      message: "toast_delete_sub_plan_type_failed",
    });
  }
};
