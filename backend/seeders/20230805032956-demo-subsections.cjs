"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("subsections", [
      {
        id: "99de4fd0-738d-4a2f-9252-8a19211a61f9",
        name: "Subsection11",
        archived: false,
        sectionId: "537c8fdc-36e3-4b4a-9cd7-a0eb01a03014",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "b650ccbd-a0f6-4e8b-9db5-2bc8f566e23b",
        name: "Subsection12",
        archived: false,
        sectionId: "537c8fdc-36e3-4b4a-9cd7-a0eb01a03014",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "e35efd97-ff88-4d6a-ba97-1cde29c6add7",
        name: "Subsection21",
        archived: false,
        sectionId: "993cd480-738d-4a2f-92df-8a19211a61f9",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "fc2535a3-dec9-4c01-8cda-448afd7ce8e6",
        name: "Subsection22",
        archived: false,
        sectionId: "993cd480-738d-4a2f-92df-8a19211a61f9",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "854d8f9c-36e3-4b4a-9cd7-a0eb01a03014",
        name: "Subsection32",
        archived: false,
        sectionId: "b5ab6de2-c668-42f9-a614-490fd3ae5042",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("subsections", null, {});
  },
};
