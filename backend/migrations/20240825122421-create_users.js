"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    return queryInterface.createTable("users", {
      id: {
        type: Sequelize.STRING(36),
        primaryKey: true,
      },
      userId: {
        type: Sequelize.STRING,
        allowNull: false,
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
      createdAt: {
        type: Sequelize.DATE,
      },
      updatedAt: {
        type: Sequelize.DATE,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    return queryInterface.dropTable("users");
  },
};
