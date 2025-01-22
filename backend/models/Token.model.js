export default (sequelize, Sequelize) => {
  return sequelize.define(
    "tokens",
    {
      id: {
        type: Sequelize.STRING(36),
        primaryKey: true,
      },
      token: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      type: {
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
      expiredAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    },
    {
      timestamps: false,
    },
  );
};
