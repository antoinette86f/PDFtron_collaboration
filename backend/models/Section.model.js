export default (sequelize, Sequelize) => {
  return sequelize.define("sections", {
    id: {
      type: Sequelize.STRING(36),
      primaryKey: true,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    archived: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
    },
  });
};
