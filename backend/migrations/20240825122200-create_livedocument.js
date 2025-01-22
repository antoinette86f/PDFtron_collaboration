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
    return queryInterface.createTable("live_documents", {
      documentId: {
        type: Sequelize.STRING(36),
        primaryKey: true,
      },
      fileName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      type: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      stage: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 1,
      },
      approvalStatus: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      owner: {
        type: Sequelize.STRING,
      },
      planId: {
        type: Sequelize.STRING,
        references: {
          model: {
            tableName: "plans",
            key: "id",
          },
        },
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
    return queryInterface.dropTable("live_documents");
  },
};
