export default (sequelize, Sequelize) => {
  return sequelize.define("roles", {
    id: {
      type: Sequelize.STRING(36),
      primaryKey: true,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    color: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    archived: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
    },
    signature: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
  });
};
