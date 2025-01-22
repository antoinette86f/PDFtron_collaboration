import { Annotation } from "../../models/index.js";
import { Op } from "sequelize";

//#region API function - service
/**
 * Get all annotations by document id
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */

export const getAnnotations = async (req, res) => {
  try {
    const { pageSize, page, keyword } = req.query;

    const annotations = await Annotation.findAndCountAll({
      where: {
        xfdfString: {
          [Op.like]: `%${typeof keyword === "undefined" ? "" : keyword}%`,
        },
      },
      offset: pageSize * (page - 1),
      limit: Number(pageSize),
      distinct: false,
    });
    res.status(200).send(annotations);
  } catch (err) {
    console.log("err=>", err);
    res.status(400).send({
      type: "error",
      message: "toast_load_annotation_failed",
    });
  }
};

export const getAnnotation = async (req, res) => {
  try {
    const annotationId = req.params.id;
    const annotation = await Annotation.find({
      where: {
        annotationId: annotationId,
      },
    });
    res.status(200).send(annotation);
  } catch (err) {
    res.status(400).send({
      type: "error",
      message: "toast_load_annotation_failed",
    });
  }
};
//#endregion

export const createAnnotation = async (req, res) => {
  const { annotationId, xfdfString, userId, documentId } = req.body;

  try {
    await Annotation.create({
      annotationId,
      xfdfString,
      userId,
      documentId,
    });
    res.status(200).send({
      annotationId,
      xfdfString,
      userId,
      documentId,
    });
  } catch (err) {
    console.log("err=>", err);
    res.status(400).send({
      type: "error",
      message: "toast_create_annotation_failed",
    });
  }
};

export const updateAnnotation = async (req, res) => {
  const { id } = req.params;
  const { xfdfString } = req.body;

  const query = {
    where: {
      annotationId: id,
    },
  };

  try {
    await Annotation.update({ xfdfString }, query);

    res.status(200).send({
      type: "success",
      message: "toast_update_annotation_success",
    });
  } catch (err) {
    console.log("err=>", err);
    res.status(400).send({
      type: "error",
      message: "toast_update_annotation_failed",
    });
  }
};

//#region Public Function
export const createOrUpdateAnnotation = (
  documentId,
  annotationId,
  xfdfString,
  userId,
) => {
  // validate args
  if (documentId && annotationId && xfdfString && userId) {
    // insert or update database
    Annotation.upsert({
      annotationId,
      xfdfString,
      userId: userId,
      documentId: documentId,
    })
      .then((result) => {
        return result;
      })
      .catch((err) => {
        console.log(`Error message: ${err}`);
        return [];
      });
  } else {
    console.log("Invalid input");
    return [];
  }
};
//#endregion

export const deleteAnnotation = async (req, res) => {
  const { id } = req.params;

  try {
    await Annotation.destroy({
      where: { annotationId: id },
    });

    res.status(200).send({
      type: "success",
      message: "toast_delete_annotation_success",
    });
  } catch (err) {
    console.log("err=>", err);
    res.status(400).send({
      type: "error",
      message: "toast_delete_annotation_failed",
    });
  }
};
