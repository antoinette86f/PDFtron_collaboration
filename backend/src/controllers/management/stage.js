import { Stage } from "../../../models/index.js";
import dotenv from "dotenv";
import { v4 as uuidv4 } from "uuid";
import { Op } from "sequelize";
import { generateFilterQuery } from "../../utils/generateFilterQuery.js";

dotenv.config();

async function bulkUpdate(stages) {
  const updatePromises = stages.map((stage) => {
    return Stage.update({ order: stage.order }, { where: { id: stage.id } });
  });

  return Promise.all(updatePromises);
}

export const createStage = async (req, res) => {
  const { stageMode, enabled, order } = req.body;

  try {
    const sameStages = await Stage.findAndCountAll({
      where: {
        stageMode: stageMode,
      },
    });
    if (sameStages?.count > 0) {
      res.status(409).send({
        type: "warning",
        message: "toast_stage_Mode_duplicated",
      });
    } else {
      const stage = await Stage.create({
        id: uuidv4(),
        stageMode,
        enabled,
        order,
      });
      res.status(200).send(stage);
    }
  } catch (err) {
    console.log("err=>", err);
    res.status(400).send({
      type: "error",
      message: "toast_create_stage_failed",
    });
  }
};

export const getStages = async (req, res) => {
  try {
    const { page, pageSize, filters, filtersOperator } = req.query;

    if (!pageSize || !page) {
      const stages = await Stage.findAndCountAll();
      res.status(200).send(stages);
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
          case "stageMode":
            subWhere = { stageMode: subOperator };
            break;
          case "order":
            subWhere = { order: subOperator };
            break;
          case "createdAt":
            subWhere = { createdAt: subOperator };
            break;
          case "updatedAt":
            subWhere = { updatedAt: subOperator };
            break;
          default:
            subWhere = { stageMode: subOperator };
        }
        where.push(subWhere);
      });

      const stages = await Stage.findAndCountAll({
        where: {
          [filtersOperator === "or" && where.length > 1 ? Op.or : Op.and]:
            where,
        },
        offset: pageSize * page,
        limit: Number(pageSize),
        distinct: false,
      });
      res.status(200).send(stages);
    } else {
      const stages = await Stage.findAndCountAll({
        offset: pageSize * page,
        limit: Number(pageSize),
        distinct: false,
      });
      res.status(200).send(stages);
    }
  } catch (err) {
    console.log("err=>", err);
    res.status(400).send({
      type: "error",
      message: "toast_create_stage_failed",
    });
  }
};

export const updateStage = async (req, res) => {
  const { id } = req.params;
  const { stageMode, enabled, order } = req.body;
  const query = {
    where: { id: id },
  };
  try {
    const sameStages = await Stage.findAndCountAll({
      where: {
        stageMode: stageMode,
        id: {
          [Op.ne]: id,
        },
      },
    });
    if (sameStages?.count > 0) {
      res.status(409).send({
        type: "warning",
        message: "toast_stage_Mode_duplicated",
      });
    } else {
      await Stage.update(
        {
          stageMode,
          enabled,
          order,
        },
        query,
      );
      const stages = await Stage.findAndCountAll();
      res.status(200).send(stages);
    }
  } catch (err) {
    console.log("err=>", err);
    res.status(400).send({
      type: "error",
      message: "toast_update_stage_failed",
    });
  }
};

export const deleteStage = async (req, res) => {
  const { id } = req.params;
  try {
    await Stage.destroy({
      where: {
        id: id,
      },
    });
    res.status(200).send({
      type: "success",
      message: "toast_delete_stage_success",
    });
  } catch (err) {
    console.log("err=>", err);
    res.status(400).send({
      type: "error",
      message: "toast_delete_stage_failed",
    });
  }
};

export const updateAllStages = async (req, res) => {
  const stages = req.body; // Assuming this is where the data comes from

  try {
    await bulkUpdate(stages);
    res.status(200).send({
      type: "success",
      message: "toast_order_rearrange_success",
    });
  } catch (err) {
    res.status(400).send({
      type: "error",
      message: "toast_order_rearrange_failed",
    });
  }
};
