export default (sequelize, Sequelize) => {
  return sequelize.define("generation_logs", {
    id: {
      type: Sequelize.STRING(36),
      primaryKey: true,
    },
    month: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    performed: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
    },
    error: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  });
};
