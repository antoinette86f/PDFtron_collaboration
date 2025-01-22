export default (sequelize, Sequelize) => {
  return sequelize.define("stages", {
    id: {
      type: Sequelize.STRING,
      primaryKey: true,
    },
    stageMode: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    order: {
      type: Sequelize.STRING,
      allowNull: false,
      default: "1",
    },
    enabled: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
    },
    days: {
      type: Sequelize.INTEGER,
      allowNull: true,
      defaultValue: 0,
    },
    createdAt: {
      type: Sequelize.DATE,
    },
    updatedAt: {
      type: Sequelize.DATE,
    },
  });
};
