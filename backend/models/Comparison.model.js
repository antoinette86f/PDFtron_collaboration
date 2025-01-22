export default (sequelize, Sequelize) => {
  return sequelize.define("comparisons", {
    id: {
      type: Sequelize.STRING(36),
      primaryKey: true,
    },
    stage: {
      type: Sequelize.INTEGER,
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
    },
    metaData: {
      type: Sequelize.STRING,
    },
    createdAt: {
      type: Sequelize.DATE,
    },
    updatedAt: {
      type: Sequelize.DATE,
    },
  });
};
