"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.removeColumn("stages", "printVolume", {});
    await queryInterface.removeColumn("stages", "printPermission", {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.addColumn("stages", "printVolume", {
      type: Sequelize.INTEGER,
      allowNull: true,
    });
    await queryInterface.addColumn("stages", "printPermission", {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    });
  },
};
