import { ProhibitedWord } from "../../../models/index.js";
import dotenv from "dotenv";
import { v4 as uuidv4 } from "uuid";
import { Op } from "sequelize";
import { generateFilterQuery } from "../../utils/generateFilterQuery.js";

dotenv.config();

export const createProhibitedWord = async (req, res) => {
  const { name } = req.body;

  try {
    const sameWords = await ProhibitedWord.findAndCountAll({
      where: {
        name: name,
      },
    });
    if (sameWords.count > 0) {
      res.status(409).send({
        type: "warning",
        message: "toast_duplicated_prohibited_word",
      });
    } else {
      await ProhibitedWord.create({
        id: uuidv4(),
        name,
      });
      res.status(200).send({
        type: "success",
        message: "toast_create_prohibited_word_success",
      });
    }
  } catch (err) {
    console.log("err=>", err);
    res.status(400).send({
      type: "error",
      message: "toast_create_prohibited_word_failed",
    });
  }
};

export const getProhibitedWords = async (req, res) => {
  try {
    const { page = 1, pageSize = 0, filters, filtersOperator } = req.query;

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
          case "name":
            subWhere = { name: subOperator };
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
      const prohibitedWords = await ProhibitedWord.findAndCountAll({
        where: {
          [filtersOperator === "or" && where.length > 1 ? Op.or : Op.and]:
            where,
        },
        offset: pageSize * page,
        limit: pageSize ? Number(pageSize) : undefined,
        distinct: false,
      });
      res.status(200).send(prohibitedWords);
    } else {
      const prohibitedWords = await ProhibitedWord.findAndCountAll({
        offset: pageSize * page,
        limit: pageSize ? Number(pageSize) : undefined,
        distinct: false,
      });
      res.status(200).send(prohibitedWords);
    }
  } catch (err) {
    console.log("err=>", err);
    res.status(400).send({
      type: "error",
      message: "toast_load_prohibited_words_failed",
    });
  }
};

export const updateProhibitedWord = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  const query = {
    where: { id: id },
  };
  try {
    const sameWords = await ProhibitedWord.findAndCountAll({
      where: {
        name: name,
        id: {
          [Op.ne]: id,
        },
      },
    });

    if (sameWords.count > 0) {
      res.status(409).send({
        type: "warning",
        message: "toast_duplicated_prohibited_word",
      });
    } else {
      await ProhibitedWord.update(
        {
          name,
        },
        query,
      );
      res.status(200).send({
        type: "success",
        message: "toast_update_prohibited_word_success",
      });
    }
  } catch (err) {
    console.log("err=>", err);
    res.status(400).send({
      type: "error",
      message: "toast_update_prohibited_word_failed",
    });
  }
};

export const deleteProhibitedWord = async (req, res) => {
  const { id } = req.params;
  try {
    await ProhibitedWord.destroy({
      where: {
        id: id,
      },
    });
    res.status(200).send({
      type: "success",
      message: "toast_delete_prohibited_word_success",
    });
  } catch (err) {
    console.log("err=>", err);
    res.status(400).send({
      type: "error",
      message: "toast_delete_prohibited_word_failed",
    });
  }
};
