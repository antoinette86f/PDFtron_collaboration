"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("plan_types", [
      {
        id: "fc9755a3-dec9-4c01-8cda-448afd7ce8e6",
        name: "Other",
        archived: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "473b39c6-cf63-48cc-83eb-b4d5f3dcfe35",
        name: "plan-type-1",
        archived: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "62c44fc0-6a8a-4c74-9933-d3ab328c672d",
        name: "plan-type-2",
        archived: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "d42d46fb-99df-4166-8f7e-3c7284fc15b6",
        name: "plan-type-3",
        archived: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("plan_types", null, {});
  },
};
