export default (sequelize, Sequelize) => {
  return sequelize.define("prescriptions", {
    id: {
      type: Sequelize.STRING,
      primaryKey: true,
    },
    title: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    userId: {
      type: Sequelize.STRING,
      references: {
        model: {
          tableName: "users",
          key: "id",
        },
      },
      allowNull: false,
    },
    planId: {
      type: Sequelize.STRING,
      references: {
        model: {
          tableName: "plans",
          key: "id",
        },
      },
      allowNull: false,
    },
    comment: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    content: {
      type: Sequelize.TEXT,
      maxSize: 2000,
      length: "long",
      allowNull: false,
    },
    approvalStatus: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
    createdAt: {
      type: Sequelize.DATE,
    },
    updatedAt: {
      type: Sequelize.DATE,
    },
  });
};
