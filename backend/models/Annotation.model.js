export default (sequelize, Sequelize) => {
  return sequelize.define("annotations", {
    annotationId: {
      type: Sequelize.STRING(36),
      primaryKey: true,
    },
    xfdfString: {
      type: Sequelize.TEXT,
      allowNull: false,
      default: "signed_document",
    },
    createdAt: {
      type: Sequelize.DATE,
    },
    updatedAt: {
      type: Sequelize.DATE,
    },
    documentId: {
      type: Sequelize.STRING,
      references: {
        model: {
          tableName: "live_documents",
          key: "documentId",
        },
      },
    },
    userId: {
      type: Sequelize.STRING,
      references: {
        model: {
          tableName: "users",
          key: "id",
        },
      },
    },
  });
};
