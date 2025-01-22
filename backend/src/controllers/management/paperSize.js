import { PaperSize } from "../../../models/index.js";
import dotenv from "dotenv";
import { v4 as uuidv4 } from "uuid";
import { Op } from "sequelize";
import { generateFilterQuery } from "../../utils/generateFilterQuery.js";

dotenv.config();

export const createPaperSize = async (req, res) => {
  const { name, height, width } = req.body;

  try {
    const samePaperSizes = await PaperSize.findAndCountAll({
      where: {
        name: name,
      },
    });
    if (samePaperSizes.count > 0) {
      res.status(409).send({
        type: "warning",
        message: "toast_duplicated_paper_size",
      });
    } else {
      const id = uuidv4();
      await PaperSize.create({
        id,
        name,
        height,
        width,
      });
      res.status(200).send({
        id,
        name,
        height,
        width,
      });
    }
  } catch (err) {
    console.log("err=>", err);
    res.status(400).send({
      type: "error",
      message: "toast_create_paper_size_failed",
    });
  }
};

export const getPaperSizes = async (req, res) => {
  try {
    const { page, pageSize, filters, filtersOperator } = req.query;
    if (!pageSize || !page) {
      const paperSizes = await PaperSize.findAndCountAll();
      res.status(200).send(paperSizes);
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
          case "width":
            subWhere = { width: subOperator };
            break;
          case "height":
            subWhere = { height: subOperator };
            break;
          default:
            subWhere = { name: subOperator };
        }
        where.push(subWhere);
      });

      const paperSizes = await PaperSize.findAndCountAll({
        where: {
          [filtersOperator === "or" && where.length > 1 ? Op.or : Op.and]:
            where,
        },
        offset: pageSize * page,
        limit: Number(pageSize),
        distinct: false,
      });
      res.status(200).send(paperSizes);
    } else {
      const paperSizes = await PaperSize.findAndCountAll({
        offset: pageSize * page,
        limit: Number(pageSize),
        distinct: false,
      });
      res.status(200).send(paperSizes);
    }
  } catch (err) {
    console.log("err=>", err);
    res.status(400).send({
      type: "error",
      message: "toast_load_paper_sizes_failed",
    });
  }
};

export const updatePaperSize = async (req, res) => {
  const { id } = req.params;
  const { name, width, height } = req.body;
  try {
    const samePaperSizes = await PaperSize.findAndCountAll({
      where: {
        name: name,
        id: {
          [Op.ne]: id,
        },
      },
    });
    if (samePaperSizes.count > 0) {
      res.status(409).send({
        type: "warning",
        message: "toast_duplicated_paper_size",
      });
    } else {
      const query = {
        where: { id: id },
      };
      await PaperSize.update(
        {
          name,
          height,
          width,
        },
        query,
      );
      res.status(200).send({
        id,
        name,
        height,
        width,
      });
    }
  } catch (err) {
    console.log("err=>", err);
    res.status(400).send({
      type: "error",
      message: "toast_update_paper_size_failed",
    });
  }
};

export const deletePaperSize = async (req, res) => {
  const { id } = req.params;
  try {
    await PaperSize.destroy({
      where: {
        id: id,
      },
    });
    res.status(200).send({
      type: "success",
      message: "toast_delete_paper_size_success",
    });
  } catch (err) {
    console.log("err=>", err);
    res.status(400).send({
      type: "error",
      message: "toast_delete_paper_size_failed",
    });
  }
};
