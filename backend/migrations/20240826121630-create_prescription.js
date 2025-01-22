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
    return queryInterface.createTable("prescriptions", {
      id: {
        type: Sequelize.STRING,
        primaryKey: true,
      },
      title: {
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
      planId: {
        type: Sequelize.STRING,
        references: {
          model: {
            tableName: "plans",
            key: "id",
          },
        },
        allowNull: false,
      },
      comment: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      content: {
        type: Sequelize.TEXT,
        maxSize: 2000,
        length: "long",
        allowNull: false,
      },
      approvalStatus: {
        type: Sequelize.TEXT,
        allowNull: false,
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
    return queryInterface.dropTable("prescriptions");
  },
};
