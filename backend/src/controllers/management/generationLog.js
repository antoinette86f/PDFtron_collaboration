import { GenerationLog } from "../../../models/index.js";
import dotenv from "dotenv";
import { Op } from "sequelize";
import { generateFilterQuery } from "../../utils/generateFilterQuery.js";

dotenv.config();

export const getLogs = async (req, res) => {
  try {
    const { pageSize, page, filters, filtersOperator } = req.query;

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
          case "month":
            subWhere = { month: subOperator };
            break;
          case "performed":
            subWhere = { performed: subOperator };
            break;
          case "error":
            subWhere = { error: subOperator };
            break;
          case "date":
            subWhere = { date: subOperator };
            break;
          default:
            subWhere = { name: subOperator };
        }
        where.push(subWhere);
      });
      const logs = await GenerationLog.findAndCountAll({
        where: {
          [filtersOperator === "or" && where.length > 1 ? Op.or : Op.and]:
            where,
        },
        offset: pageSize * page,
        limit: Number(pageSize),
        distinct: false,
      });
      res.status(200).send(logs);
    } else {
      const logs = await GenerationLog.findAndCountAll({
        offset: pageSize * page,
        limit: Number(pageSize),
        distinct: false,
      });
      res.status(200).send(logs);
    }
  } catch (err) {
    console.log("err=>", err);
    res.status(400).send({
      type: "error",
      message: "toast_get_logs_failed",
    });
  }
};

export const clearLogs = async (req, res) => {
  try {
    await GenerationLog.destroy({
      where: {},
    });
    res.status(200).send({
      type: "success",
      message: "toast_clear_logs_success",
    });
  } catch (err) {
    console.log("err=>", err);
    res.status(400).send({
      type: "error",
      message: "toast_clear_logs_failed",
    });
  }
};
