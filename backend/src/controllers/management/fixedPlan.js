import { FixedPlan } from "../../../models/index.js";
import dotenv from "dotenv";
import { Op } from "sequelize";
import { v4 as uuidv4 } from "uuid";
import { generateFilterQuery } from "../../utils/generateFilterQuery.js";

dotenv.config();

export const createFixedPlan = async (req, res) => {
  const {
    title,
    owner,
    startDate,
    endDate,
    publishDate,
    sectionId,
    subsectionId,
    stages,
    isRepeatable,
    planTypeId,
    subPlanTypeId,
    paperSizeId,
  } = req.body;

  try {
    await FixedPlan.create({
      id: uuidv4(),
      title,
      owner,
      startDate,
      endDate,
      publishDate,
      sectionId,
      subsectionId,
      isRepeatable,
      stages,
      planTypeId,
      subPlanTypeId,
      paperSizeId,
    });
    res.status(200).send({
      type: "success",
      message: "toast_create_fixed_plan_success",
    });
  } catch (err) {
    res.status(400).send({
      type: "error",
      message: "toast_create_fixed_plan_failed",
    });
  }
};

export const getFixedPlans = async (req, res) => {
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
          case "title":
            subWhere = { title: subOperator };
            break;
          case "section":
            subWhere = { "$section.name$": subOperator };
            break;
          case "subsection":
            subWhere = { "$subsection.name$": subOperator };
            break;
          case "planType":
            subWhere = { "$plan_type.name$": subOperator };
            break;
          case "subPlanType":
            subWhere = { "$subPlan_type.name$": subOperator };
            break;
          case "updatedAt":
            subWhere = { updatedAt: subOperator };
            break;
          case "paperSize":
            subWhere = { "$paper_size.name$": subOperator };
            break;
          default:
            subWhere = { title: subOperator };
        }
        where.push(subWhere);
      });
      const fixedPlans = await FixedPlan.findAndCountAll({
        where: {
          [filtersOperator === "or" && where.length > 1 ? Op.or : Op.and]:
            where,
        },
        include: [
          "section",
          "subsection",
          "plan_type",
          "subPlan_type",
          "paper_size",
        ],
        offset: pageSize * page,
        limit: Number(pageSize),
        distinct: false,
      });
      res.status(200).send(fixedPlans);
    } else {
      const fixedPlans = await FixedPlan.findAndCountAll({
        include: [
          "section",
          "subsection",
          "plan_type",
          "subPlan_type",
          "paper_size",
        ],
        offset: pageSize * page,
        limit: Number(pageSize),
        distinct: false,
      });
      res.status(200).send(fixedPlans);
    }
  } catch (err) {
    console.log("err=>", err);
    res.status(400).send({
      type: "error",
      message: "toast_load_fixed_plans_failed",
    });
  }
};

export const getAllFixedPlans = async (req, res) => {
  try {
    const fixedPlans = await FixedPlan.findAndCountAll({
      include: [
        "section",
        "subsection",
        "plan_type",
        "subPlan_type",
        "paper_size",
      ],
      distinct: false,
    });
    res.status(200).send(fixedPlans);
  } catch (err) {
    res.status(400).send({
      type: "error",
      message: "toast_load_all_fixed_plans_failed",
    });
  }
};

export const getFixedPlan = async (req, res) => {
  try {
    const id = req.params.id;
    const fixedPlan = await FixedPlan.findOne({
      where: {
        id: id,
      },
      include: [
        "section",
        "subsection",
        "plan_type",
        "subPlan_type",
        "paper_size",
      ],
    });
    res.status(200).send(fixedPlan);
  } catch (err) {
    console.log("err=>", err);
    res.status(400).send({
      type: "error",
      message: "toast_load_fixed_plans_failed",
    });
  }
};

export const updateFixedPlan = async (req, res) => {
  const { id } = req.params;
  const {
    title,
    owner,
    startDate,
    endDate,
    stages,
    publishDate,
    sectionId,
    subsectionId,
    isRepeatable,
    planTypeId,
    subPlanTypeId,
    paperSizeId,
  } = req.body;

  const query = {
    where: { id: id },
  };

  try {
    await FixedPlan.update(
      {
        title,
        owner,
        startDate,
        endDate,
        stages,
        publishDate,
        sectionId,
        subsectionId,
        isRepeatable,
        planTypeId,
        subPlanTypeId,
        paperSizeId,
      },
      query,
    );
    res.status(200).send({
      type: "success",
      message: "toast_update_fixed_plan_success",
    });
  } catch (err) {
    console.log("err=>", err);
    res.status(400).send({
      type: "error",
      message: "toast_update_fixed_plan_failed",
    });
  }
};

export const deleteFixedPlan = async (req, res) => {
  const { id } = req.params;
  try {
    await FixedPlan.destroy({
      where: { id: id },
    });
    res.status(200).send({
      type: "success",
      message: "toast_delete_fixed_plan_success",
    });
  } catch (err) {
    res.status(400).send({
      type: "error",
      message: "toast_delete_fixed_plan_failed",
    });
  }
};
