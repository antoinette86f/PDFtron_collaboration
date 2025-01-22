import { Section } from "../../../models/index.js";
import dotenv from "dotenv";
import { Op } from "sequelize";
import { v4 as uuidv4 } from "uuid";
import { generateFilterQuery } from "../../utils/generateFilterQuery.js";

dotenv.config();

export const createSection = async (req, res) => {
  const { name, archived } = req.body;

  try {
    const sameSections = await Section.findAndCountAll({
      where: {
        name: name,
      },
    });
    if (sameSections.count > 0) {
      res.status(409).send({
        type: "warning",
        message: "toast_duplicated_section",
      });
    } else {
      const id = uuidv4();
      await Section.create({
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
      message: "toast_create_section_failed",
    });
  }
};

export const getSections = async (req, res) => {
  try {
    const { pageSize, page, filters, filtersOperator } = req.query;

    if (!pageSize || !page) {
      const sections = await Section.findAndCountAll();
      res.status(200).send(sections);
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
      const sections = await Section.findAndCountAll({
        where: {
          [filtersOperator === "or" && where.length > 1 ? Op.or : Op.and]:
            where,
        },
        offset: pageSize * page,
        limit: Number(pageSize),
        distinct: false,
      });
      res.status(200).send(sections);
    } else {
      const sections = await Section.findAndCountAll({
        offset: pageSize * page,
        limit: Number(pageSize),
        distinct: false,
      });
      res.status(200).send(sections);
    }
  } catch (err) {
    console.log("err=>", err);
    res.status(400).send({
      type: "error",
      message: "toast_load_sections_failed",
    });
  }
};

export const getSectionById = async (req, res) => {
  const sectionId = req.query.id;
  try {
    const section = await Section.findOne({
      where: {
        id: sectionId,
      },
    });
    res.status(200).send(section);
  } catch (err) {
    res.status(400).send({
      type: "error",
      message: "toast_load_sections_failed",
    });
  }
};

export const updateSection = async (req, res) => {
  const { id } = req.params;
  const { name, archived } = req.body;
  const query = {
    where: { id: id },
  };
  try {
    const sameSections = await Section.findAndCountAll({
      where: {
        name: name,
        id: {
          [Op.ne]: id,
        },
      },
    });

    if (sameSections.count > 0) {
      res.status(409).send({
        type: "warning",
        message: "toast_duplicated_section",
      });
    } else {
      await Section.update({ name, archived }, query);

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
      message: "toast_update_section_failed",
    });
  }
};

export const deleteSection = async (req, res) => {
  const { id } = req.params;

  try {
    await Section.destroy({
      where: { id: id },
    });

    res.status(200).send({
      type: "success",
      message: "toast_delete_section_success",
    });
  } catch (err) {
    console.log("err=>", err);
    res.status(400).send({
      type: "error",
      message: "toast_delete_section_failed",
    });
  }
};
