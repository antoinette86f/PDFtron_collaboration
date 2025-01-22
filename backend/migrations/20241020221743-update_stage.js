"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn("stages", "printVolume", {
      type: Sequelize.INTEGER,
      allowNull: false,
      defaultValue: 100,
    });
  },

  async down(queryInterface, Sequelize) {},
};
