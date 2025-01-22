import { PaperSize, PrintRequest } from "../../../models/index.js";
import dotenv from "dotenv";
import { v4 as uuidv4 } from "uuid";
import { Op } from "sequelize";
import { generateFilterQuery } from "../../utils/generateFilterQuery.js";

dotenv.config();

export const getResponseData = async (data) => {
  let rows = [];
  for (let i = 1; i <= 31; i++) {
    const row = await getTableRow(data[i]);
    rows.push({
      ...row,
      date: i,
    });
  }
  return rows;
};

export const getTableRow = async (printRequests) => {
  const paperSizes = await PaperSize.findAll();
  const types = paperSizes.map((paperSize) => paperSize.name);

  let rowTemp = {
    ...types.reduce((acc, type) => {
      acc[type] = 0;
      return acc;
    }, {}),
    total: 0,
  };

  if (printRequests?.length > 0) {
    printRequests.forEach((item) => {
      types.map((paperSize, index) => {
        if (item.paperSize === paperSize) {
          rowTemp[paperSize] += item.pagesCount * item.printVolume;
        }
      });
      rowTemp.total = rowTemp.total + item.pagesCount * item.printVolume;
    });
  }

  return rowTemp;
};

export const createPrintRequest = async (req, res) => {
  const {
    planId,
    stage,
    status,
    title,
    printVolume,
    pagesCount,
    documentId,
    section,
    subSection,
    paperSize,
    note,
    fileType,
  } = req.body;

  try {
    const samePrintRequests = await PrintRequest.findAndCountAll({
      where: {
        planId,
        stage,
        status,
        title,
        printVolume,
        pagesCount,
        documentId,
        paperSize,
        section,
        subSection,
        note,
        fileType,
      },
    });
    if (samePrintRequests?.count > 0) {
      res.status(409).send({
        type: "warning",
        message: "toast_duplicated_print_request",
      });
    } else {
      await PrintRequest.create({
        id: uuidv4(),
        planId,
        stage,
        status,
        title,
        printVolume,
        pagesCount,
        documentId,
        paperSize,
        section,
        subSection,
        note,
        fileType,
      });
      res.status(200).send({
        type: "success",
        message: "toast_create_print_request_success",
      });
    }
  } catch (err) {
    console.log("err=>", err);
    res.status(400).send({
      type: "error",
      message: "toast_create_print_request_failed",
    });
  }
};

export const getPrintRequests = async (req, res) => {
  try {
    const { pageSize = 0, page = 1, filters, filtersOperator } = req.query;
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
          case "planId":
            subWhere = { planId: subOperator };
            break;
          case "stage":
            subWhere = { stage: subOperator };
            break;
          case "status":
            subWhere = { status: subOperator };
            break;
          case "start":
            subWhere = { start: subOperator };
            break;
          case "end":
            subWhere = { end: subOperator };
            break;
          case "printVolume":
            subWhere = { printVolume: subOperator };
            break;
          case "pagesCount":
            subWhere = { pagesCount: subOperator };
            break;
          case "section":
            subWhere = { section: subOperator };
            break;
          case "subSection":
            subWhere = { subSection: subOperator };
            break;
          case "paperSize":
            subWhere = { paperSize: subOperator };
            break;
          case "fileType":
            subWhere = { fileType: subOperator };
            break;
          case "createdAt":
            subWhere = { createdAt: subOperator };
            break;
          default:
            subWhere = { stage: subOperator };
        }
        where.push(subWhere);
      });
      const types = await PrintRequest.findAndCountAll({
        where: {
          [filtersOperator === "or" && where.length > 1 ? Op.or : Op.and]:
            where,
        },
        offset: pageSize * page,
        limit: pageSize ? Number(pageSize) : undefined,
        distinct: false,
        include: ["plan"],
      });
      res.status(200).send(types);
    } else {
      const types = await PrintRequest.findAndCountAll({
        offset: pageSize * page,
        limit: Number(pageSize),
        distinct: false,
        include: ["plan"],
      });
      res.status(200).send(types);
    }
  } catch (err) {
    console.log("err=>", err);
    res.status(400).send({
      type: "error",
      message: "toast_fetch_all_print_requests_failed",
    });
  }
};

export const getPrintLogs = async (req, res) => {
  try {
    const { date, section, subSection, totalMode } = req.query;

    const filterDate = new Date(date);
    const year = filterDate.getFullYear();
    const month = (filterDate.getMonth() + 1).toString().padStart(2, '0');

    const printRequests = await PrintRequest.findAll({
      where: {
        start: {
          [Op.like]: `${typeof date === "undefined" ? "" : `${year}-${month}`}%`,
        },
        section: {
          [Op.like]: `%${typeof section === "undefined" ? "" : section}%`,
        },
        subSection: {
          [Op.like]: `%${typeof subSection === "undefined" ? "" : subSection}%`,
        },
        status: "Done",
      },
    });

    let totalForMonth = 0;
    let data = {};

    printRequests.forEach((item) => {
      const date = new Date(item.start);
      const day = date.getDate().toString();
      let totalForDay = 0;

      totalForDay = item.pagesCount * item.printVolume;
      totalForMonth += totalForDay;

      if (data[day]) {
        data[day] = [...data[day], item];
      } else {
        data[day] = [item];
      }
    });

    if (!totalMode) {
      const rows = await getResponseData(data);
      res.send({ rows, totalForMonth });
    } else {
      res.send({ totalForMonth });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({
      type: "error",
      message: "toast_fetch_all_print_Logs_failed",
    });
  }
};

export const updatePrintRequest = async (req, res) => {
  const { id } = req.params;
  const {
    planId,
    stage,
    status,
    start,
    end,
    pagesCount,
    printVolume,
    documentId,
    section,
    subSection,
    paperSize,
    note,
    fileType,
  } = req.body;
  const query = {
    where: { id: id },
  };
  try {
    await PrintRequest.update(
      {
        planId,
        stage,
        start,
        status,
        end,
        printVolume,
        pagesCount,
        documentId,
        section,
        subSection,
        paperSize,
        note,
        fileType,
      },
      query,
    );
    res.status(200).send({
      type: "success",
      message: "toast_update_print_request_success",
    });
  } catch (err) {
    console.log("err=>", err);
    res.status(400).send({
      type: "error",
      message: "toast_update_print_request_failed",
    });
  }
};

export const deletePrintRequest = async (req, res) => {
  const { id } = req.params;
  try {
    await PrintRequest.destroy({
      where: {
        id: id,
      },
    });
    res.status(200).send({
      type: "success",
      message: "toast_delete_print_request_success",
    });
  } catch (err) {
    console.log("err=>", err);
    res.status(400).send({
      type: "error",
      message: "toast_delete_print_request_failed",
    });
  }
};
