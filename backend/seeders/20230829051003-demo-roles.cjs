"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("roles", [
      {
        id: "ab548f9c-36e3-4b4a-9cd7-a0eb01a03014",
        name: "Super Admin",
        archived: false,
        color: "#ff0000",
        signature: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "b9743680-738d-4a2f-9252-8a19211a61f9",
        name: "Admin",
        color: "#00ff00",
        archived: false,
        signature: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "d2736662-c668-42f9-a614-490fd3ae5042",
        name: "Super Master",
        color: "#0000ff",
        archived: false,
        signature: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "edb42743-a0f6-4e8b-9db5-2bc8f566e23b",
        name: "Master",
        archived: false,
        signature: true,
        color: "#ffff00",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "f35e6427-ff88-4d6a-ba97-1c91d9c6add7",
        name: "Sub Master",
        color: "#ff00ff",
        archived: false,
        signature: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "gb3455a3-dec9-4c01-8cda-448afd7ce8e6",
        name: "Checker",
        color: "#00ffff",
        archived: false,
        signature: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "i2664d9c-36e3-4b4a-9cd7-a0eb01a03014",
        name: "Editor",
        color: "#009900",
        archived: false,
        signature: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "c563bc80-738d-4a2f-9252-8a19211a61f9",
        name: "Planner",
        color: "#990099",
        archived: false,
        signature: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "j23dc662-c668-42f9-a614-490fd3ae5042",
        name: "Printer",
        color: "#999900",
        archived: false,
        signature: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "h65764d3-a0f6-4e8b-9db5-2bc8f566e23b",
        name: "Corrector",
        color: "#009999",
        archived: false,
        signature: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("roles", null, {});
  },
};
