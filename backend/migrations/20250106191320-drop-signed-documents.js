"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // Drop the signed_documents table
    return queryInterface.dropTable("signed_documents");
  },

  async down(queryInterface, Sequelize) {
    // Recreate the signed_documents table if needed
    return queryInterface.createTable("signed_documents", {
      documentId: {
        type: Sequelize.STRING(36),
        primaryKey: true,
      },
      username: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      fileName: {
        type: Sequelize.STRING,
        allowNull: false,
        default: "signed_document",
      },
      file_content: {
        type: Sequelize.TEXT,
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
};
