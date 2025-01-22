import { Plan, Prescription } from "../../models/index.js";
import dotenv from "dotenv";
import { v4 as uuidv4 } from "uuid";
import { generateFilterQuery } from "../utils/generateFilterQuery.js";
import { Op } from "sequelize";

dotenv.config();

export const createPrescription = async (req, res) => {
  const { title, userId, planId, content, comment, approvalStatus } = req.body;

  try {
    const samePrescriptions = await Prescription.findAndCountAll({
      where: {
        title: title,
      },
    });

    const currentPlan = await Plan.findOne({
      where: {
        id: planId,
      }
    })

    if (samePrescriptions.count > 0) {
      res.status(409).send({
        type: "warning",
        message: "toast_duplicated_prescription",
      });
    } else if (!currentPlan) {
      res.status(404).send({
        type: "warning",
        message: "toast_there_is_no_plan",
      });
    } else {
      await Prescription.create({
        id: uuidv4(),
        title,
        content,
        comment,
        userId,
        planId,
        approvalStatus,
      });
      res.status(200).send({
        type: "success",
        message: "toast_create_prescription_success",
      });
    }
  } catch (err) {
    console.log("err=>", err);
    res.status(400).send({
      type: "error",
      message: "toast_create_prescription_failed",
    });
  }
};

export const getPrescriptions = async (req, res) => {
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
          case "owner":
            subWhere = { owner: subOperator };
            break;
          case "plan":
            subWhere = { planId: subOperator };
            break;
          case "comment":
            subWhere = { comment: subOperator };
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
      const prescriptions = await Prescription.findAndCountAll({
        where: {
          [filtersOperator === "or" && where.length > 1 ? Op.or : Op.and]:
            where,
        },
        include: ["plan", "user"],
        offset: pageSize * page,
        limit: Number(pageSize),
        distinct: false,
      });
      res.status(200).send(prescriptions);
    } else {
      const prescriptions = await Prescription.findAndCountAll({
        include: ["plan", "user"],
        offset: pageSize * page,
        limit: Number(pageSize),
        distinct: false,
      });
      res.status(200).send(prescriptions);
    }
  } catch (err) {
    console.log("err=>", err);
    res.status(400).send({
      type: "error",
      message: "toast_load_prescriptions_failed",
    });
  }
};

export const getPrescription = async (req, res) => {
  try {
    const id = req.params.id;
    const prescription = await Prescription.findOne({
      where: {
        id: id,
      },
    });
    res.status(200).send(prescription);
  } catch (err) {
    console.log("err =>", err);
    res.status(400).send({
      type: "error",
      message: "toast_load_prescriptions_failed",
    });
  }
};

export const updatePrescription = async (req, res) => {
  const { id } = req.params;
  const { title, content, comment, approvalStatus } = req.body;

  const query = {
    where: { id: id },
  };
  try {
    await Prescription.update(
      {
        title,
        content,
        comment,
        approvalStatus,
      },
      query,
    );
    res.status(200).send({
      type: "success",
      message: "toast_update_prescription_success",
    });
  } catch (err) {
    console.log("err=>", err);
    res.status(400).send({
      type: "error",
      message: "toast_update_prescription_failed",
    });
  }
};

export const deletePrescription = async (req, res) => {
  const { id } = req.params;
  try {
    await Prescription.destroy({
      where: {
        id: id,
      },
    });
    res.status(200).send({
      type: "success",
      message: "toast_delete_prescription_success",
    });
  } catch (err) {
    console.log("err=>", err);
    res.status(400).send({
      type: "error",
      message: "toast_delete_prescription_failed",
    });
  }
};
