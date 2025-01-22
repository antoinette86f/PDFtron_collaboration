export default (sequelize, Sequelize) => {
  return sequelize.define(
    "paper_sizes",
    {
      id: {
        type: Sequelize.STRING,
        primaryKey: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      height: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      width: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    },
    {
      timestamps: false,
    },
  );
};
