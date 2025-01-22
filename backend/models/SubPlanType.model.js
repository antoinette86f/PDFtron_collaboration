export default (sequelize, Sequelize) => {
  return sequelize.define("subPlan_types", {
    id: {
      type: Sequelize.STRING,
      primaryKey: true,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    planTypeId: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    archived: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
    },
  });
};
