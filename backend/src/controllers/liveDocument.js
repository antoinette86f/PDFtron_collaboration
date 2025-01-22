import { Annotation, LiveDocument, PrintRequest } from "../../models/index.js";
import dotenv from "dotenv";
import { Op } from "sequelize";
import { generateFilterQuery } from "../utils/generateFilterQuery.js";
import * as Yup from "yup";

dotenv.config();

const API_PORT = process.env.API_PORT || "3333";
const API_HOST = process.env.API_HOST || "localhost";

export const uploadDocument = async (req, res) => {
  try {
    const { documentId } = req.body;
    res.status(200).send({ documentId });
  } catch (error) {
    res.status(400).json({ errors: error.errors });
  }
};

export const createDocument = async (req, res) => {
  const {
    documentId,
    fileName,
    planId,
    stage,
    paperSize,
    owner,
    approvalStatus,
    pagesCount,
    completed,
  } = req.body;
  let urlFile = await buildUrlFile(documentId);

  try {
    await LiveDocument.destroy({
      where: [{ planId: planId }, { stage: stage }],
    });
    await PrintRequest.destroy({
      where: [{ planId: planId }, { stage: stage }],
    });
    await LiveDocument.create({
      documentId,
      fileName,
      stage,
      paperSize,
      planId,
      owner,
      approvalStatus,
      pagesCount,
      completed,
    });
    res.status(200).send({
      documentId,
      fileName,
      owner,
      paperSize,
      urlFile,
      planId,
      completed,
    });
  } catch (err) {
    console.log("err=>", err);
    res.status(400).send({
      type: "error",
      message: "toast_create_live_document_failed",
    });
  }
};

export const getDocuments = async (req, res) => {
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
          case "fileName":
            subWhere = { fileName: subOperator };
            break;
          case "stage":
            subWhere = { stage: subOperator };
            break;
          case "paperSize":
            subWhere = { paperSize: subOperator };
            break;
          case "owner":
            subWhere = { owner: subOperator };
            break;
          case "plan":
            subWhere = { "$plan.name$": subOperator };
            break;
          case "createdAt":
            subWhere = { createdAt: subOperator };
            break;
          case "updatedAt":
            subWhere = { updatedAt: subOperator };
            break;
          default:
            subWhere = { fileName: subOperator };
        }
        where.push(subWhere);
      });
      const documents = await LiveDocument.findAndCountAll({
        where: {
          [filtersOperator === "or" && where.length > 1 ? Op.or : Op.and]:
            where,
        },
        include: ["plan"],
        offset: pageSize * page,
        limit: pageSize ? Number(pageSize) : undefined,
        distinct: false,
      });
      res.status(200).send(documents);
    } else {
      const documents = await LiveDocument.findAndCountAll({
        include: ["plan"],
        offset: pageSize * page,
        limit: pageSize ? Number(pageSize) : undefined,
        distinct: false,
      });
      res.status(200).send(documents);
    }
  } catch (err) {
    console.log("err=>", err);
    res.status(400).send({
      type: "error",
      message: "toast_load_live_document_failed",
    });
  }
};

export const getDocument = async (req, res) => {
  try {
    const id = req.params.id;
    const doc = await LiveDocument.findOne({
      where: {
        documentId: id,
      },
    });
    let prevDoc = null;
    if (doc && doc.stage > 1) {
      prevDoc = await LiveDocument.findOne({
        where: {
          planId: doc.planId,
          stage: doc.stage - 1,
        },
      });
    }
    res.status(200).send({
      doc: {
        ...doc.dataValues,
        urlFile: await buildUrlFile(doc.documentId),
      },
      prevDoc: prevDoc
        ? {
            ...prevDoc.dataValues,
            urlFile: await buildUrlFile(prevDoc.documentId),
          }
        : null,
    });
  } catch (err) {
    console.log("err=>", err);
    res.status(400).send({
      type: "error",
      message: "toast_load_live_document_failed",
    });
  }
};

export const getAnnotationsByDocument = async (req, res) => {
  try {
    const documentId = req.params.id;
    const annotations = await Annotation.findAll({
      where: {
        documentId: documentId,
      },
    });
    res.status(200).send(annotations);
  } catch (err) {
    res.status(400).send({
      type: "error",
      message: "toast_load_annotation_failed",
    });
  }
};

export const getDocumentFile = async (req, res) => {
  try {
    const id = req.params.id;
    const doc = await LiveDocument.findOne({
      where: {
        documentId: id,
      },
    });
    res.download(`public/uploads/documents/${doc.documentId}.pdf`);
  } catch (err) {
    console.log("err=>", err);
    res.status(400).send({
      type: "error",
      message: "toast_load_live_document_failed",
    });
  }
};

export const getDocumentByPlanStage = async (req, res) => {
  try {
    const planId = req.params.planId;
    const doc = await LiveDocument.findAndCountAll({
      where: {
        planId: planId,
      },
    });
    res.status(200).send(doc);
  } catch (err) {
    console.log("err=>", err);
    res.status(400).send({
      type: "error",
      message: "toast_load_live_document_failed",
    });
  }
};

export const getSingleDocument = async (req, res) => {
  try {
    const documentId = req.params.id;
    const url = await buildUrlFile(documentId);
    const doc = await LiveDocument.findOne({
      where: {
        documentId: documentId,
      },
    });
    if (doc) {
      res.status(200).send({
        doc: {
          ...doc.dataValues,
          urlFile: url,
        },
      });
    } else {
      res.status(200).send({
        doc: {
          urlFile: url,
        },
      });
    }
  } catch (err) {
    res.status(400).send({
      type: "error",
      message: "toast_load_live_document_failed",
    });
  }
};

export const updateDocument = async (req, res) => {
  const { id } = req.params;
  const {
    stage,
    owner,
    planId,
    approvalStatus,
    pagesCount,
    completed,
    paperSize,
  } = req.body;

  const query = {
    where: {
      documentId: id,
    },
  };

  try {
    await LiveDocument.update(
      {
        stage,
        owner,
        planId,
        approvalStatus,
        pagesCount,
        completed,
        paperSize,
      },
      query,
    );

    res.status(200).send({
      type: "success",
      message: "toast_update_live_document_success",
    });
  } catch (err) {
    console.log("err=>", err);
    res.status(400).send({
      type: "error",
      message: "toast_update_live_document_failed",
    });
  }
};

export const deleteDocument = async (req, res) => {
  const { id } = req.params;
  try {
    await LiveDocument.destroy({
      where: { documentId: id },
    });
    res.status(200).send({
      type: "success",
      message: "toast_delete_live_document_success",
    });
  } catch (err) {
    console.log("err=>", err);
    res.status(400).send({
      type: "error",
      message: "toast_delete_live_document_failed",
    });
  }
};

const buildUrlFile = async (fileName) => {
  const request = await PrintRequest.findOne({
    where: { documentId: fileName },
  });

  if (request) {
    return `http://${API_HOST}:${API_PORT}/public/uploads/documents/${fileName}.${request.fileType}`;
  } else {
    return `http://${API_HOST}:${API_PORT}/public/uploads/documents/${fileName}.pdf`;
  }
};
