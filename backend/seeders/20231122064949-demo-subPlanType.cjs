"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("subPlan_types", [
      {
        id: "cb548f9c-36e3-4b4a-9cd7-a0eb01a03014",
        name: "subPlan-type-11",
        archived: false,
        planTypeId: "473b39c6-cf63-48cc-83eb-b4d5f3dcfe35",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "12736662-c668-42f9-a614-490fd3ae5042",
        name: "subPlan-type-12",
        archived: false,
        planTypeId: "473b39c6-cf63-48cc-83eb-b4d5f3dcfe35",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "bdb42743-a0f6-4e8b-9db5-2bc8f566e23b",
        name: "subPlan-type-13",
        archived: false,
        planTypeId: "473b39c6-cf63-48cc-83eb-b4d5f3dcfe35",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "e35e6427-ff88-4d6a-ba97-1c91d9c6add7",
        name: "subPlan-type-21",
        archived: false,
        planTypeId: "62c44fc0-6a8a-4c74-9933-d3ab328c672d",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "537c8f9c-36e3-4b4a-9cd7-a0eb01a03014",
        name: "subPlan-type-22",
        archived: false,
        planTypeId: "62c44fc0-6a8a-4c74-9933-d3ab328c672d",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "993cd480-738d-4a2f-9252-8a19211a61f9",
        name: "subPlan-type-23",
        archived: false,
        planTypeId: "62c44fc0-6a8a-4c74-9933-d3ab328c672d",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "b5ab6662-c668-42f9-a614-490fd3ae5042",
        name: "subPlan-type-31",
        archived: false,
        planTypeId: "d42d46fb-99df-4166-8f7e-3c7284fc15b6",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "b650c743-a0f6-4e8b-9db5-2bc8f566e23b",
        name: "subPlan-type-32",
        archived: false,
        planTypeId: "d42d46fb-99df-4166-8f7e-3c7284fc15b6",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "e35efd97-ff88-4d6a-ba97-1c91d9c6add7",
        name: "subPlan-type-33",
        archived: false,
        planTypeId: "d42d46fb-99df-4166-8f7e-3c7284fc15b6",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("subPlan_types", null, {});
  },
};
