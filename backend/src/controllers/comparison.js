import { Comparison } from "../../models/index.js";
import dotenv from "dotenv";
import { v4 as uuidv4 } from "uuid";

dotenv.config();

export const createComparison = async (req, res) => {
  const { planId, stage, metaData } = req.body;

  try {
    await Comparison.create({
      id: uuidv4(),
      stage,
      planId,
      metaData,
    });
    res.status(200).send({
      stage,
      planId,
      metaData,
    });
  } catch (err) {
    console.log("err=>", err);
    res.status(400).send({
      type: "error",
      message: "toast_create_comparison_failed",
    });
  }
};

export const getComparisonsByPlan = async (req, res) => {
  try {
    const planId = req.params.id;

    const comparisons = await Comparison.findAndCountAll({
      where: {
        planId: planId,
      },
    });

    res.status(200).send(comparisons);
  } catch (err) {
    console.log("err=>", err);
    res.status(400).send({
      type: "error",
      message: "toast_load_comparison_failed",
    });
  }
};

export const getComparison = async (req, res) => {
  try {
    const id = req.params.id;
    const comparison = await Comparison.findOne({
      where: {
        id: id,
      },
    });
    res.status(200).send(comparison);
  } catch (err) {
    console.log("err=>", err);
    res.status(400).send({
      type: "error",
      message: "toast_delete_comparison_failed",
    });
  }
};
