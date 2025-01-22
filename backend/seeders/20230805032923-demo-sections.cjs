"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("sections", [
      {
        id: "537c8fdc-36e3-4b4a-9cd7-a0eb01a03014",
        name: "Section1",
        archived: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "993cd480-738d-4a2f-92df-8a19211a61f9",
        name: "Section2",
        archived: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "b5ab6de2-c668-42f9-a614-490fd3ae5042",
        name: "Section3",
        archived: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("sections", null, {});
  },
};
