"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn("print_requests", "note", {
      type: Sequelize.STRING,
      allowNull: false,
    });
    await queryInterface.addColumn("print_requests", "fileType", {
      type: Sequelize.STRING,
      allowNull: false,
    });
  },

  async down(queryInterface, Sequelize) {},
};
