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
    return queryInterface.createTable("stages", {
      id: {
        type: Sequelize.STRING,
        primaryKey: true,
      },
      stageMode: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      order: {
        type: Sequelize.STRING,
        allowNull: false,
        default: "1",
      },
      enabled: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      days: {
        type: Sequelize.INTEGER,
        allowNull: true,
        defaultValue: 0,
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
    return queryInterface.dropTable("stages");
  },
};
