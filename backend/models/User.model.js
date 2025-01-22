export default (sequelize, Sequelize) => {
  return sequelize.define("users", {
    id: {
      type: Sequelize.STRING(36),
      primaryKey: true,
    },
    userId: {
      type: Sequelize.STRING,
      unique: true,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    email: {
      type: Sequelize.STRING,
      allowNull: true,
      unique: true,
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    sectionId: {
      type: Sequelize.STRING,
      references: {
        model: {
          tableName: "sections",
          key: "id",
        },
      },
      allowNull: true,
    },
    subsectionId: {
      type: Sequelize.STRING,
      references: {
        model: {
          tableName: "subsections",
          key: "id",
        },
      },
      allowNull: true,
    },
    roleId: {
      type: Sequelize.STRING,
      references: {
        model: {
          tableName: "roles",
          key: "id",
        },
      },
      allowNull: true,
    },
    activated: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    avatarUrl: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    gender: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
    },
    birthday: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  });
};
