import { Notification, Role, User } from "../../models/index.js";
import { Op } from "sequelize";
import { v4 as uuidv4 } from "uuid";
import { generateFilterQuery } from "../utils/generateFilterQuery.js";

export const createNotification = async (ownerId, content, action, unread) => {
  if (content && action) {
    let rolesToInclude;

    if (action === "stage" || action === "next") {
      rolesToInclude = [
        "Master",
        "Sub Master",
        "Checker",
        "Editor",
        "Corrector",
      ]; // Replace with actual role names
    } else if (action === "prescription") {
      rolesToInclude = ["Master", "Sub Master", "Editor"]; // Replace with actual role names
    } else if (action === "print") {
      rolesToInclude = ["Printer"];
    } else if (action === "done") {
      rolesToInclude = ["Editor"];
    }

    const users = await User.findAndCountAll({
      where: {
        "$role.name$": {
          [Op.in]: rolesToInclude,
        },
        id: {
          [Op.not]: ownerId,
        },
      },
      include: ["role"],
    });

    const data = users.rows.map((user) => ({
      id: uuidv4(),
      content,
      userId: user.id,
      unread,
    }));

    try {
      await Notification.bulkCreate(data);
      console.log("Notifications were created successfully!");
    } catch (err) {
      console.log("Error creating notifications", err);
    }
  } else {
    console.log("Invalid input");
    return [];
  }
};

export const getNotifications = async (req, res) => {
  const { page, pageSize, filters, filtersOperator, userId } = req.query;
  try {
    if (!pageSize || !page) {
      const notifications = await Notification.findAndCountAll({
        where: {
          userId: req.user.id,
        },
      });
      res.status(200).send(notifications);
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
          case "content":
            subWhere = { content: subOperator };
            break;
          case "unread":
            subWhere = { unread: subOperator };
            break;
          case "createdAt":
            subWhere = { createdAt: subOperator };
            break;
          case "updatedAt":
            subWhere = { updatedAt: subOperator };
            break;
          default:
            subWhere = { createdAt: subOperator };
        }
        where.push(subWhere);
      });

      const notifications = await Notification.findAndCountAll({
        where: {
          [filtersOperator === "or" && where.length > 1 ? Op.or : Op.and]:
            where,
          userId: req.user.id,
        },
        offset: pageSize * page,
        limit: Number(pageSize),
        distinct: false,
      });
      res.status(200).send(notifications);
    } else {
      const notifications = await Notification.findAndCountAll({
        where: { userId: req.user.id },
        order: [["createdAt", "DESC"]],
        offset: pageSize * page,
        limit: Number(pageSize),
        distinct: false,
      });
      res.status(200).send(notifications);
    }
  } catch (err) {
    res.status(400).send({
      type: "error",
      message: "toast_get_notification_failed",
    });
  }
};

export const deleteNotification = async (req, res) => {
  const { id } = req.params;
  try {
    await Notification.destroy({
      where: {
        id: id,
      },
    });
    res.status(200).send({
      type: "success",
      message: "toast_delete_notification_success",
    });
  } catch (err) {
    console.log("err=>", err);
    res.status(400).send({
      type: "error",
      message: "toast_delete_notification_failed",
    });
  }
};

export const readNotification = async (req, res) => {
  const { id } = req.params;
  const query = {
    where: { id: id },
  };

  try {
    await Notification.update({ unread: false }, query);
    res.status(200).send({
      type: "success",
      message: "toast_read_notification_success",
    });
  } catch (err) {
    res.status(400).send({
      type: "error",
      message: "toast_read_notification_failed",
    });
  }
};

export const markAllAsRead = async (req, res) => {
  const query = await Notification.findAll({
    where: { userId: req.user.id },
    order: [["createdAt", "DESC"]],
    limit: 10,
    offset: 0,
  });
  try {
    await Promise.all(query.map((not) => not.update({ unread: false })));
    res.status(200).send({
      type: "success",
      message: "toast_read_notification_success",
    });
  } catch (err) {
    res.status(400).send({
      type: "error",
      message: "toast_read_notification_failed",
    });
  }
};

export const clearAllNotifications = async (req, res) => {
  const query = await Notification.findAll({
    where: {
      userId: req.user.id,
    },
    order: [["createdAt", "DESC"]],
    limit: 10,
    offset: 0,
  });
  try {
    await Promise.all(
      query.map((notification) => {
        return notification.destroy();
      }),
    );

    res.status(200).send({
      type: "success",
      message: "toast_clear_notifications_success",
    });
  } catch (err) {
    res.status(400).send({
      type: "error",
      message: "toast_clear_notifications_failed",
    });
  }
};

export const getCountNotifications = async (req, res) => {
  try {
    const count = await Notification.count({
      where: {
        userId: req.user.id,
        unread: true,
      },
    });
    res.status(200).send({ count });
  } catch (err) {
    res.status(400).send({
      type: "error",
      message: "toast_count_notifications_failed",
    });
  }
};
