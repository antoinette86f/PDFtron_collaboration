"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn("print_requests", "section", {
      type: Sequelize.STRING,
      allowNull: false,
    });
    await queryInterface.addColumn("print_requests", "subSection", {
      type: Sequelize.STRING,
      allowNull: false,
    });
    await queryInterface.addColumn("print_requests", "paperSize", {
      type: Sequelize.STRING,
      allowNull: false,
    });
  },

  async down(queryInterface, Sequelize) {},
};
