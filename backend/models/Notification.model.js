export default (sequelize, Sequelize) => {
  return sequelize.define("notifications", {
    id: {
      type: Sequelize.STRING(36),
      primaryKey: true,
    },
    content: {
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
    unread: {
      type: Sequelize.BOOLEAN,
      defaultValue: true,
      allowNull: false,
    },
  });
};
