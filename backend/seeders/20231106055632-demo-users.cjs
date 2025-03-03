"use strict";
const bcrypt = require("bcrypt");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("users", [
      {
        id: "99743680-738d-4a2f-9252-8a19211a61f9",
        userId: "superAdmin",
        name: "Super Admin",
        email: "superadmin@gmail.com",
        password: bcrypt.hashSync("a", 10),
        sectionId: "537c8fdc-36e3-4b4a-9cd7-a0eb01a03014",
        subsectionId: "99de4fd0-738d-4a2f-9252-8a19211a61f9",
        roleId: "ab548f9c-36e3-4b4a-9cd7-a0eb01a03014",
        createdAt: new Date(),
        updatedAt: new Date(),
        activated: true,
        gender: true,
        birthday: "20-08-2024",
      },
      {
        id: "cb548f9c-36e3-4b4a-9cd7-a0eb01a03014",
        userId: "admin",
        name: "Admin",
        email: "admin@gmail.com",
        password: bcrypt.hashSync("a", 10),
        sectionId: "993cd480-738d-4a2f-92df-8a19211a61f9",
        subsectionId: "e35efd97-ff88-4d6a-ba97-1cde29c6add7",
        roleId: "b9743680-738d-4a2f-9252-8a19211a61f9",
        createdAt: new Date(),
        updatedAt: new Date(),
        activated: true,
        gender: true,
        birthday: "20-08-2024",
      },
      {
        id: "12736662-c668-42f9-a614-490fd3ae5042",
        userId: "superMaster",
        name: "Super Master",
        email: "supermaster@gmail.com",
        password: bcrypt.hashSync("a", 10),
        sectionId: "537c8fdc-36e3-4b4a-9cd7-a0eb01a03014",
        subsectionId: "b650ccbd-a0f6-4e8b-9db5-2bc8f566e23b",
        roleId: "d2736662-c668-42f9-a614-490fd3ae5042",
        createdAt: new Date(),
        updatedAt: new Date(),
        activated: true,
        gender: true,
        birthday: "20-08-2024",
      },
      {
        id: "bdb42743-a0f6-4e8b-9db5-2bc8f566e23b",
        userId: "master",
        name: "Master",
        email: "master@gmail.com",
        password: bcrypt.hashSync("a", 10),
        sectionId: "993cd480-738d-4a2f-92df-8a19211a61f9",
        subsectionId: "fc2535a3-dec9-4c01-8cda-448afd7ce8e6",
        roleId: "edb42743-a0f6-4e8b-9db5-2bc8f566e23b",
        createdAt: new Date(),
        updatedAt: new Date(),
        activated: true,
        gender: true,
        birthday: "20-08-2024",
      },
      {
        id: "e35e6427-ff88-4d6a-ba97-1c91d9c6add7",
        userId: "subMaster",
        name: "Sub Master",
        email: "submaster@gmail.com",
        password: bcrypt.hashSync("a", 10),
        sectionId: "993cd480-738d-4a2f-92df-8a19211a61f9",
        subsectionId: "e35efd97-ff88-4d6a-ba97-1cde29c6add7",
        roleId: "f35e6427-ff88-4d6a-ba97-1c91d9c6add7",
        createdAt: new Date(),
        updatedAt: new Date(),
        activated: true,
        gender: true,
        birthday: "20-08-2024",
      },
      {
        id: "fb3455a3-dec9-4c01-8cda-448afd7ce8e6",
        userId: "checker",
        name: "Checker",
        email: "checker@gmail.com",
        password: bcrypt.hashSync("a", 10),
        sectionId: "537c8fdc-36e3-4b4a-9cd7-a0eb01a03014",
        subsectionId: "99de4fd0-738d-4a2f-9252-8a19211a61f9",
        roleId: "gb3455a3-dec9-4c01-8cda-448afd7ce8e6",
        createdAt: new Date(),
        updatedAt: new Date(),
        activated: true,
        gender: true,
        birthday: "20-08-2024",
      },
      {
        id: "52664d9c-36e3-4b4a-9cd7-a0eb01a03014",
        userId: "editor",
        name: "Editor",
        email: "editor@gmail.com",
        password: bcrypt.hashSync("a", 10),
        sectionId: "993cd480-738d-4a2f-92df-8a19211a61f9",
        subsectionId: "fc2535a3-dec9-4c01-8cda-448afd7ce8e6",
        roleId: "i2664d9c-36e3-4b4a-9cd7-a0eb01a03014",
        createdAt: new Date(),
        updatedAt: new Date(),
        activated: true,
        gender: true,
        birthday: "20-08-2024",
      },
      {
        id: "9563bc80-738d-4a2f-9252-8a19211a61f9",
        userId: "planner",
        name: "Planner",
        email: "planner@gmail.com",
        password: bcrypt.hashSync("a", 10),
        sectionId: "537c8fdc-36e3-4b4a-9cd7-a0eb01a03014",
        subsectionId: "b650ccbd-a0f6-4e8b-9db5-2bc8f566e23b",
        roleId: "c563bc80-738d-4a2f-9252-8a19211a61f9",
        createdAt: new Date(),
        updatedAt: new Date(),
        activated: true,
        gender: true,
        birthday: "20-08-2024",
      },
      {
        id: "b23dc662-c668-42f9-a614-490fd3ae5042",
        userId: "printer",
        name: "Printer",
        email: "printer@gmail.com",
        password: bcrypt.hashSync("a", 10),
        sectionId: "b5ab6de2-c668-42f9-a614-490fd3ae5042",
        subsectionId: "854d8f9c-36e3-4b4a-9cd7-a0eb01a03014",
        roleId: "j23dc662-c668-42f9-a614-490fd3ae5042",
        createdAt: new Date(),
        updatedAt: new Date(),
        activated: true,
        gender: true,
        birthday: "20-08-2024",
      },
      {
        id: "b65764d3-a0f6-4e8b-9db5-2bc8f566e23b",
        userId: "corrector",
        name: "Corrector",
        email: "corrector@gmail.com",
        password: bcrypt.hashSync("a", 10),
        sectionId: "537c8fdc-36e3-4b4a-9cd7-a0eb01a03014",
        subsectionId: "b650ccbd-a0f6-4e8b-9db5-2bc8f566e23b",
        roleId: "h65764d3-a0f6-4e8b-9db5-2bc8f566e23b",
        createdAt: new Date(),
        updatedAt: new Date(),
        activated: true,
        gender: true,
        birthday: "20-08-2024",
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("users", null, {});
  },
};
