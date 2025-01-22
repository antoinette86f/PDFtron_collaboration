"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("stages", [
      {
        id: "537c8f9c-36e3-4b4a-9cd7-a0eb01a03014",
        stageMode: "Prescription Mode",
        enabled: true,
        order: "1",
        days: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "993cd480-738d-4a2f-9252-8a19211a61f9",
        stageMode: "Editing Mode 1",
        enabled: true,
        order: "2",
        days: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "b5ab6662-c668-42f9-a614-490fd3ae5042",
        stageMode: "Editing Mode 2",
        enabled: true,
        order: "3",
        days: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "b650c743-a0f6-4e8b-9db5-2bc8f566e23b",
        stageMode: "Editing Mode 3",
        enabled: true,
        order: "4",
        days: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "e35efd97-ff88-4d6a-ba97-1c91d9c6add7",
        stageMode: "Editing Mode 4",
        enabled: true,
        order: "5",
        days: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "fc9755a3-dec9-4c01-8cda-448afd7ce8e6",
        stageMode: "Editing Mode 5",
        enabled: true,
        order: "6",
        days: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("stages", null, {});
  },
};
