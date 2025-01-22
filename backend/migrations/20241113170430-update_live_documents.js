"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // Rename the column 'type' to 'paperSize'
    await queryInterface.renameColumn("live_documents", "type", "paperSize");
  },

  async down(queryInterface, Sequelize) {
    // Rename back 'paperSize' to 'type' for rollback
    await queryInterface.renameColumn("live_documents", "paperSize", "type");
  },
};
