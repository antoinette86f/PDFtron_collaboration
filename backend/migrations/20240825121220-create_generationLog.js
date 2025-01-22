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
    return queryInterface.createTable("generation_logs", {
      id: {
        type: Sequelize.STRING(36),
        primaryKey: true,
      },
      month: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      performed: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      error: {
        type: Sequelize.STRING,
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
    return queryInterface.dropTable("generation_logs");
  },
};
