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
    return queryInterface.createTable("annotations", {
      annotationId: {
        type: Sequelize.STRING(36),
        primaryKey: true,
      },
      xfdfString: {
        type: Sequelize.TEXT,
        allowNull: false,
        default: "signed_document",
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
    return queryInterface.dropTable("annotations");
  },
};
