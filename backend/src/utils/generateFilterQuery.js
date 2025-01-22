import { Op } from "sequelize";
import moment from "moment";

export const generateFilterQuery = (operator, keyword, field) => {
  if (keyword === "true" || keyword === "false") {
    keyword = keyword === "true";
  }
  switch (operator) {
    case "contains":
      return { [Op.like]: `%${keyword}%` };
    case "equals":
      return { [Op.eq]: keyword };
    case "startsWith":
      return { [Op.like]: `${keyword}%` };
    case "endsWith":
      return { [Op.like]: `%${keyword}` };
    case "isEmpty":
      return { [Op.is]: null };
    case "isNotEmpty":
      return { [Op.not]: null };
    case "is":
      if (
        field === "startDate" ||
        field === "endDate" ||
        field === "publishDate" ||
        field === "createdAt" ||
        field === "updatedAt"
      ) {
        return {
          [Op.between]: [
            moment(keyword).startOf("day").toDate(),
            moment(keyword).endOf("day").toDate(),
          ],
        };
      } else {
        return { [Op.eq]: keyword === true };
      }
    case "isAnyOf":
      return { [Op.in]: keyword || [] };
    case "not":
      return {
        [Op.notBetween]: [
          moment(keyword).startOf("day").toDate(),
          moment(keyword).endOf("day").toDate(),
        ],
      };
    case "after":
      return { [Op.gt]: moment(keyword).toDate() };
    case "onOrAfter":
      return { [Op.gte]: moment(keyword).toDate() };
    case "before":
      return { [Op.lt]: moment(keyword).toDate() };
    case "onOrBefore":
      return { [Op.lte]: moment(keyword).toDate() };
    default:
      return { [Op.like]: `%${keyword}%` };
  }
};
