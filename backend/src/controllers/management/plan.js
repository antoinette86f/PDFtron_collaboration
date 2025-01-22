import {
  Plan,
  FixedPlan,
  GenerationLog,
  PlanType,
  SubPlanType,
} from "../../../models/index.js";
import dotenv from "dotenv";
import { Op } from "sequelize";
import { v4 as uuidv4 } from "uuid";
import moment from "moment";
import { generateFilterQuery } from "../../utils/generateFilterQuery.js";
import section from "../../routes/management/section.js";

dotenv.config();

export const createPlan = async (req, res) => {
  const {
    title,
    owner,
    startDate,
    planTypeId,
    subPlanTypeId,
    endDate,
    publishDate,
    sectionId,
    subsectionId,
    stages,
    isRepeatable,
    currentStage,
    paperSizeId,
  } = req.body;

  try {
    await Plan.create({
      id: uuidv4(),
      title,
      owner,
      startDate,
      endDate,
      planTypeId,
      subPlanTypeId,
      publishDate,
      sectionId,
      subsectionId,
      isRepeatable,
      stages,
      currentStage,
      completed: false,
      paperSizeId,
    });
    res.status(200).send({
      type: "success",
      message: "toast_create_plan_success",
    });
  } catch (err) {
    console.log("err=>", err);
    res.status(400).send({
      type: "error",
      message: "toast_create_plan_failed",
    });
  }
};

export const getPlans = async (req, res) => {
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
          case "startDate":
            subWhere = { startDate: subOperator };
            break;
          case "endDate":
            subWhere = { endDate: subOperator };
            break;
          case "publishDate":
            subWhere = { publishDate: subOperator };
            break;
          case "completed":
            subWhere = { completed: subOperator };
            break;
          case "paperSize":
            subWhere = { "$paper_size.name$": subOperator };
            break;
          default:
            subWhere = { title: subOperator };
        }
        where.push(subWhere);
      });

      const plans = await Plan.findAndCountAll({
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
      res.status(200).send(plans);
    } else {
      const plans = await Plan.findAndCountAll({
        include: [
          "section",
          "subsection",
          "plan_type",
          "subPlan_type",
          "paper_size",
        ],
        offset: pageSize * page,
        limit: pageSize ? Number(pageSize) : undefined,
        distinct: false,
      });
      res.status(200).send(plans);
    }
  } catch (err) {
    console.log("err=>", err);
    res.status(400).send({
      type: "error",
      message: "toast_load_plans_failed",
    });
  }
};

export const getAllPlans = async (req, res) => {
  try {
    const plans = await Plan.findAndCountAll();
    res.status(200).send(plans);
  } catch (err) {
    console.log("err=>", err);
    res.status(400).send({
      type: "error",
      message: "toast_load_plans_failed",
    });
  }
};

export const getPlan = async (req, res) => {
  try {
    const id = req.params.id;
    const plan = await Plan.findOne({
      where: {
        id: id,
      },
      include: [
        "section",
        "subsection",
        "plan_type",
        "subPlan_type",
        "prescriptions",
        "live_documents",
        "comparisons",
        "paper_size",
      ],
    });
    if (!plan) {
      return res.status(404).send({
        type: "error",
        message: "toast_there_is_no_plan",
      });
    }
    res.status(200).send(plan);
  } catch (err) {
    console.log("err=>", err);
    res.status(500).send({
      type: "error",
      message: "toast_load_plans_failed",
    });
  }
};

export const updatePlan = async (req, res) => {
  const { id } = req.params;
  const {
    title,
    owner,
    startDate,
    planTypeId,
    subPlanTypeId,
    endDate,
    stages,
    publishDate,
    sectionId,
    subsectionId,
    isRepeatable,
    currentStage,
    completed,
    paperSizeId,
  } = req.body;

  const query = {
    where: { id: id },
  };

  try {
    await Plan.update(
      {
        title,
        owner,
        startDate: moment(startDate).format("YYYY-MM-DD"),
        planTypeId,
        subPlanTypeId,
        endDate: moment(endDate).format("YYYY-MM-DD"),
        stages,
        publishDate: moment(publishDate).format("YYYY-MM-DD"),
        sectionId,
        subsectionId,
        isRepeatable,
        currentStage,
        completed,
        paperSizeId,
      },
      query,
    );
    res.status(200).send({
      type: "success",
      message: "toast_update_plan_success",
    });
  } catch (err) {
    console.log("err=>", err);
    res.status(400).send({
      type: "error",
      message: "toast_update_plan_failed",
    });
  }
};

export const deletePlan = async (req, res) => {
  const { id } = req.params;
  try {
    await Plan.destroy({
      where: { id: id },
    });

    res.status(200).send({
      type: "success",
      message: "toast_delete_plan_success",
    });
  } catch (err) {
    console.log("err=>", err);
    res.status(400).send({
      type: "error",
      message: "toast_delete_plan_failed",
    });
  }
};

export const getProgressPlans = async (req, res) => {
  try {
    const {
      pageSize,
      page,
      filters,
      filtersOperator,
      sectionId,
      subsectionId,
    } = req.query;
    const user = req.user;

    if (user.name === "Sub Master") {
      const plans = await Plan.findAndCountAll({
        where: {
          sectionId: sectionId,
          [Op.or]: [
            { subsectionId: subsectionId },
            { subsectionId: null },
          ],
        },
        include: ["section", "subsection"],
        offset: pageSize * page,
        limit: Number(pageSize),
      });
      res.status(200).send(plans);
    } else if (user.name === "Editor") {
      if (subsectionId) {
        const plans = await Plan.findAndCountAll({
          where: {
            sectionId: sectionId,
            [Op.or]: [
              { subsectionId: subsectionId },
              { subsectionId: null },
            ],
          },
          include: ["section", "subsection"],
          offset: pageSize * page,
          limit: Number(pageSize),
        });
        res.status(200).send(plans);
      } else {
        const plans = await Plan.findAndCountAll({
          where: { sectionId: sectionId },
          include: ["section", "subsection"],
          offset: pageSize * page,
          limit: Number(pageSize),
        });
        res.status(200).send(plans);
      }
    } else {
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
            case "startDate":
              subWhere = { startDate: subOperator };
              break;
            case "endDate":
              subWhere = { endDate: subOperator };
              break;
            case "publishDate":
              subWhere = { publishDate: subOperator };
              break;
            case "paperSize":
              subWhere = { "$paper_size.name$": subOperator };
              break;
            default:
              subWhere = { title: subOperator };
          }
          where.push(subWhere);
        });
        const plans = await Plan.findAndCountAll({
          where: {
            [filtersOperator === "or" && where.length > 1 ? Op.or : Op.and]:
              where,
          },
          include: ["section", "subsection"],
          offset: pageSize * page,
          limit: Number(pageSize),
          distinct: false,
        });
        res.status(200).send(plans);
      } else if (sectionId && subsectionId) {
        const plans = await Plan.findAndCountAll({
          where: {
            sectionId,
            subsectionId,
          },
          include: ["section", "subsection"],
          offset: pageSize * page,
          limit: Number(pageSize),
          distinct: false,
        });
        res.status(200).send(plans);
      } else if (sectionId) {
        const plans = await Plan.findAndCountAll({
          where: {
            sectionId,
          },
          include: ["section", "subsection"],
          offset: pageSize * page,
          limit: Number(pageSize),
          distinct: false,
        });
        res.status(200).send(plans);
      } else if (subsectionId) {
        const plans = await Plan.findAndCountAll({
          where: {
            subsectionId,
          },
          include: ["section", "subsection"],
          offset: pageSize * page,
          limit: Number(pageSize),
          distinct: false,
        });
        res.status(200).send(plans);
      } else {
        const plans = await Plan.findAndCountAll({
          include: ["section", "subsection", "paper_size"],
          offset: pageSize * page,
          limit: Number(pageSize),
          distinct: false,
        });
        res.status(200).send(plans);
      }
    }
  } catch (err) {
    console.log("err=>", err);
    res.status(400).send({
      type: "error",
      message: "toast_load_progress_plan_failed",
    });
  }
};

const generatePlanTitle = async (plan, publishAt) => {
  const planType = await PlanType.findOne({
    where: {
      id: plan?.planTypeId,
    },
  });
  const subPlanType = await SubPlanType.findOne({
    where: {
      id: plan?.subPlanTypeId,
    },
  });
  const publishDate = moment(publishAt).utc().format("YYYY-MM-DD");
  const title = `${planType?.name || ""} ${subPlanType?.name || ""} ${publishDate}`;
  return title;
};

const getStartDateFromStages = (stages, endDate) => {
  const stageArr = JSON.parse(stages || "[]");
  const end = new Date(endDate);
  let diffDays = 0;
  for (let i = 0; i < stageArr?.length; i++) {
    if (stageArr[i]?.enabled) {
      diffDays += Number(stageArr[i].days);
    }
  }
  const startDate = end.setDate(end.getDate() - diffDays);
  return new Date(startDate);
};

export const generatePlans = async (req, res) => {
  const { month } = req.body;
  const today = new Date(month);
  const monthLabels = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const weekLabels = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const fixedPlans = await FixedPlan.findAll({
    include: ["section", "subsection", "paper_size"],
    distinct: false,
  });

  const weeklyPlans = fixedPlans.filter(
    (item) => JSON.parse(item.dataValues.isRepeatable).cycle === "Weekly",
  );

  let weekDays = [];
  let startDates = [];
  let publishDates = [];
  let generatedPlansFromWeekly = [];
  let generatedPlansFromMonthly = [];
  let generatedPlansFromYearly = [];

  weeklyPlans.map((plan) =>
    JSON.parse(plan.dataValues.isRepeatable).value.map((item) => {
      if (!weekDays.includes(weekLabels.indexOf(item))) {
        weekDays.push({ plan, date: weekLabels.indexOf(item) });
      }
    }),
  );

  for (let i = 1; i < 32; i++) {
    const day = new Date(
      `${today.getUTCFullYear()}-${(today.getUTCMonth() + 1).toString().padStart(2, "0")}-${i.toString().padStart(2, "0")}`,
    );
    const weekDay = weekDays.find((item) => item.date === day.getUTCDay());
    if (weekDay) {
      publishDates.push(day);
      startDates.push(
        getStartDateFromStages(
          weekDay.plan.dataValues.stages,
          day.toDateString(),
        ),
      );
    }
  }

  for (let i = 0; i < startDates.length; i++) {
    const start = startDates[i];
    const publish = publishDates[i];
    const end = new Date(publish);

    await generatePlanTitle(weeklyPlans[0].dataValues, publishDates[i]).then(
      (res) => {
        generatedPlansFromWeekly.push({
          ...weeklyPlans[0],
          dataValues: {
            ...weeklyPlans[0].dataValues,
            title: res,
            startDate: start,
            endDate: end.setDate(end.getDate() - 1),
            publishDate: publishDates[i],
          },
        });
      },
    );
  }

  const monthlyPlans = fixedPlans.filter(
    (item) => JSON.parse(item.dataValues.isRepeatable).cycle === "Monthly",
  );

  for (let i = 0; i < monthlyPlans.length; i++) {
    const plan = monthlyPlans[i];
    for (
      let j = 0;
      j < JSON.parse(plan.dataValues.isRepeatable).value.length;
      j++
    ) {
      const item = JSON.parse(plan.dataValues.isRepeatable).value[j];
      const publish = new Date(
        `${today.getUTCFullYear()}-${(today.getUTCMonth() + 1).toString().padStart(2, "0")}-${item.toString().padStart(2, "0")}`,
      );
      const start = getStartDateFromStages(
        plan.dataValues?.stages,
        publish.toString(),
      );
      const end = new Date(publish);
      await generatePlanTitle(plan.dataValues, publish).then((res) => {
        generatedPlansFromMonthly.push({
          ...plan,
          dataValues: {
            ...plan.dataValues,
            title: res,
            startDate: start.setDate(start.getDate() - 1),
            endDate: end.setDate(end.getDate() - 1),
            publishDate: publish,
          },
        });
      });
    }
  }

  const yearlyPlans = fixedPlans.filter(
    (item) =>
      JSON.parse(item.dataValues.isRepeatable).cycle === "Yearly" &&
      JSON.parse(item.dataValues.isRepeatable).value.includes(
        monthLabels[today.getMonth()],
      ),
  );

  for (let i = 0; i < yearlyPlans.length; i++) {
    const plan = yearlyPlans[i];
    const publish = new Date(today);
    const start = getStartDateFromStages(
      plan.dataValues?.stages,
      publish.toString(),
    );
    const end = new Date(publish);
    await generatePlanTitle(plan.dataValues, publish).then((res) => {
      generatedPlansFromYearly.push({
        ...plan,
        dataValues: {
          ...plan.dataValues,
          title: res,
          startDate: start,
          endDate: end.setDate(end.getDate() - 1),
          publishDate: publish,
        },
      });
    });
  }

  const generatingPlans = [
    ...generatedPlansFromWeekly,
    ...generatedPlansFromMonthly,
    ...generatedPlansFromYearly,
  ];

  const logs = await GenerationLog.findAndCountAll({
    where: {
      month: `${new Date(month).getFullYear()}-${new Date(month).getMonth() + 1}`,
      performed: true,
    },
  });

  if (logs.count > 0) {
    res.status(400).send({
      type: "error",
      message: "toast_generate_plans_error",
    });
    await GenerationLog.create({
      id: uuidv4(),
      month: `${new Date(month).getFullYear()}-${new Date(month).getMonth() + 1}`,
      performed: false,
      error: "Same month generation is not possible.",
    });
  } else {
    if (generatingPlans.length !== 0) {
      generatingPlans.map((item) => {
        Plan.create({ ...item.dataValues, id: uuidv4() });
      });

      await GenerationLog.create({
        id: uuidv4(),
        month: `${new Date(month).getFullYear()}-${new Date(month).getMonth() + 1}`,
        performed: true,
        error: "",
      });

      res.status(200).send({
        type: "success",
        message: "toast_generate_plans_success",
      });
    } else {
      res.status(409).send({
        type: "warning",
        message: "toast_generate_plans_no_fixed_plans",
      });
      await GenerationLog.create({
        id: uuidv4(),
        month: `${new Date(month).getFullYear()}-${new Date(month).getMonth() + 1}`,
        performed: false,
        error: "No fixed plan",
      });
    }
  }
};
