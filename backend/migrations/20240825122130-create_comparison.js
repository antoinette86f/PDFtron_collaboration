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
    return queryInterface.createTable("comparisons", {
      id: {
        type: Sequelize.STRING(36),
        primaryKey: true,
      },
      stage: {
        type: Sequelize.INTEGER,
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
      },
      metaData: {
        type: Sequelize.STRING,
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
    return queryInterface.dropTable("comparisons");
  },
};
