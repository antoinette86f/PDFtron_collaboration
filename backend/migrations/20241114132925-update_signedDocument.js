"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // Rename the column 'type' to 'paperSize'
    await queryInterface.renameColumn(
      "signed_documents",
      "file_content",
      "fileContent",
    );
  },

  async down(queryInterface, Sequelize) {
    // Rename back 'paperSize' to 'type' for rollback
    await queryInterface.renameColumn(
      "signed_documents",
      "fileContent",
      "file_content",
    );
  },
};
