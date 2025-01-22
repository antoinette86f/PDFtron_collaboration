'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.removeIndex("tokens", "token");
    await queryInterface.changeColumn("tokens", "token", {
      type: Sequelize.TEXT,
      allowNull: false,
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.changeColumn("tokens", "token", {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
    });
  }
};
