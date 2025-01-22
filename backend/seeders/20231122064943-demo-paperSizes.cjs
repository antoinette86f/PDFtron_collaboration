"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("paper_sizes", [
      {
        id: "b23dc662-c668-42f9-a614-490fd3ae5042",
        name: "A3",
        height: "16.54",
        width: "11.69",
      },
      {
        id: "9563bc80-738d-4a2f-9252-8a19211a61f9",
        name: "A4",
        height: "11.69",
        width: "8.27",
      },
      {
        id: "52664d9c-36e3-4b4a-9cd7-a0eb01a03014",
        name: "A5",
        height: "8.27",
        width: "5.83",
      },
      {
        id: "fb3455a3-dec9-4c01-8cda-448afd7ce8e6",
        name: "B3",
        height: "11.69",
        width: "8.27",
      },
      {
        id: "e35e6427-ff88-4d6a-ba97-1c91d9c6add7",
        name: "B4",
        height: "14.33",
        width: "10.12",
      },
      {
        id: "bdb42743-a0f6-4e8b-9db5-2bc8f566e23b",
        name: "B5",
        height: "10.12",
        width: "7.17",
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("paper_sizes", null, {});
  },
};
