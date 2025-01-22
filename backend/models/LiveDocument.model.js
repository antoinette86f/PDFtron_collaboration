export default (sequelize, Sequelize) => {
  return sequelize.define("live_documents", {
    documentId: {
      type: Sequelize.STRING(36),
      primaryKey: true,
    },
    fileName: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    paperSize: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    stage: {
      type: Sequelize.INTEGER,
      allowNull: false,
      defaultValue: 1,
    },
    approvalStatus: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
    owner: {
      type: Sequelize.STRING,
    },
    planId: {
      type: Sequelize.STRING,
      references: {
        model: {
          tableName: "plans",
          key: "id",
        },
      },
    },
    pagesCount: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    completed: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    createdAt: {
      type: Sequelize.DATE,
    },
    updatedAt: {
      type: Sequelize.DATE,
    },
  });
};
