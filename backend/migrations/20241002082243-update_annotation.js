"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn("annotations", "documentId", {
      type: Sequelize.STRING(36),
      references: {
        model: "live_documents",
        key: "documentId",
      },
      allowNull: false,
    });

    await queryInterface.addColumn("annotations", "userId", {
      type: Sequelize.STRING(36),
      references: {
        model: "users",
        key: "id",
      },
      allowNull: false,
    });

    await queryInterface.addColumn("annotations", "createdAt", {
      type: Sequelize.DATE,
    });

    await queryInterface.addColumn("annotations", "updatedAt", {
      type: Sequelize.DATE,
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn("annotations", "documentId");
    await queryInterface.removeColumn("annotations", "createdAt");
    await queryInterface.removeColumn("annotations", "updatedAt");
  },
};
