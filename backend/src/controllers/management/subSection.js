import { Subsection } from "../../../models/index.js";
import dotenv from "dotenv";
import { Op } from "sequelize";
import { v4 as uuidv4 } from "uuid";
import { generateFilterQuery } from "../../utils/generateFilterQuery.js";

dotenv.config();

export const createSubSection = async (req, res) => {
  const { name, sectionId, archived } = req.body;

  try {
    const sameSubSection = await Subsection.findAndCountAll({
      where: {
        name: name,
      },
    });
    if (sameSubSection.count > 0) {
      res.status(409).send({
        type: "warning",
        message: "toast_duplicated_sub_section",
      });
    } else {
      const id = uuidv4();
      await Subsection.create({
        id,
        name,
        sectionId,
        archived,
      });
      res.status(200).send({
        id,
        name,
        archived,
        sectionId,
      });
    }
  } catch (err) {
    console.log("err=>", err);
    res.status(400).send({
      type: "error",
      message: "toast_create_sub_section_failed",
    });
  }
};

export const getSubSections = async (req, res) => {
  try {
    const { id, pageSize, page, filters, filtersOperator } = req.query;

    if (!pageSize || !page) {
      const subSections = await Subsection.findAndCountAll();
      res.status(200).send(subSections);
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
          case "sectionId":
            subWhere = { sectionId: subOperator };
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
      const subSections = await Subsection.findAndCountAll({
        where: {
          [filtersOperator === "or" && where.length > 1 ? Op.or : Op.and]:
            where,
        },
        offset: pageSize * page,
        limit: Number(pageSize),
        distinct: false,
      });
      res.status(200).send(subSections);
    } else {
      const subSections = await Subsection.findAndCountAll({
        where: {
          sectionId: id,
        },
        offset: pageSize * page,
        limit: Number(pageSize),
        distinct: false,
      });
      res.status(200).send(subSections);
    }
  } catch (err) {
    console.log("err=>", err);
    res.status(400).send({
      type: "error",
      message: "toast_load_sub_sections_failed",
    });
  }
};

export const getSubSectionById = async (req, res) => {
  const subSectionId = req.query.id;
  try {
    const subSection = await Subsection.findOne({
      where: {
        id: subSectionId,
      },
    });
    res.status(200).send(subSection);
  } catch (err) {
    console.log("err=>", err);
    res.status(400).send({
      type: "error",
      message: "toast_load_sub_sections_failed",
    });
  }
};

export const updateSubSection = async (req, res) => {
  const { id } = req.params;
  const { name, archived } = req.body;
  const query = {
    where: { id: id },
  };

  try {
    const sameSubSection = await Subsection.findAndCountAll({
      where: {
        name: name,
        id: {
          [Op.ne]: id,
        },
      },
    });
    if (sameSubSection.count > 0) {
      res.status(409).send({
        type: "warning",
        message: "toast_duplicated_sub_section",
      });
    } else {
      await Subsection.update({ name, archived }, query);

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

export const deleteSubSection = async (req, res) => {
  const { id } = req.params;

  try {
    await Subsection.destroy({
      where: { id: id },
    });
    res.status(200).send({
      type: "success",
      message: "toast_delete_sub_section_success",
    });
  } catch (err) {
    console.log("err=>", err);
    res.status(400).send({
      type: "error",
      message: "toast_delete_sub_section_failed",
    });
  }
};
