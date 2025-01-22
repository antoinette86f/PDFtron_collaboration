"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.changeColumn("print_requests", "planId", {
      type: Sequelize.STRING,
      allowNull: true,
    });
    await queryInterface.changeColumn("print_requests", "stage", {
      type: Sequelize.INTEGER,
      allowNull: true,
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.changeColumn("print_requests", "planId", {
      type: Sequelize.STRING,
      references: {
        model: {
          tableName: "plans",
          key: "id",
        },
      },
      allowNull: true,
    });
    await queryInterface.changeColumn("print_requests", "stage", {
      type: Sequelize.INTEGER,
      allowNull: false,
    });
  },
};
