"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("fixed_plans", [
      {
        id: "cb548f9c-36e3-4b4a-9cd7-a0eb01a03014",
        title: "FixedPlan1",
        planTypeId: "473b39c6-cf63-48cc-83eb-b4d5f3dcfe35",
        owner: "c563bc80-738d-4a2f-9252-8a19211a61f9",
        isRepeatable: `{
          "cycle": "Weekly",
          "value": ["Mon", "Thu"]
        }`,
        sectionId: "537c8fdc-36e3-4b4a-9cd7-a0eb01a03014",
        subsectionId: "99de4fd0-738d-4a2f-9252-8a19211a61f9",
        stages: `[
          {"id":"537c8f9c-36e3-4b4a-9cd7-a0eb01a03014","stageMode":"Prescription Mode","enabled":true,"start":"2023-08-04T22:51:08.000Z","end":"2023-08-07T22:51:08.000Z", "days": 2,"planId":"","createdAt":"2023-08-16T22:51:08.000z","updatedAt":"2023-08-16T22:51:08.000z","printPermission":false,"printVolume":"100"},
          {"id":"993cd480-738d-4a2f-9252-8a19211a61f9","stageMode":"Editing Mode 1","enabled":false,"start":"Sat Aug 05 2023 15:51:08 GMT-0700 (Pacific Daylight Time)","end":"Sat Aug 05 2023 15:51:08 GMT-0700 (Pacific Daylight Time)", "days": 0,"planId":"","createdAt":"2023-08-16T22:51:08.000z","updatedAt":"2023-08-16T22:51:08.000z","printPermission":false,"printVolume":"100"},
          {"id":"b5ab6662-c668-42f9-a614-490fd3ae5042","stageMode":"Editing Mode 2","enabled":true,"start":"Sat Aug 05 2023 15:51:08 GMT-0700 (Pacific Daylight Time)","end":"Sat Aug 05 2023 15:51:08 GMT-0700 (Pacific Daylight Time)", "days": 2,"planId":"","createdAt":"2023-08-16T22:51:08.000z","updatedAt":"2023-08-16T22:51:08.000z","printPermission":false,"printVolume":"100"},
          {"id":"b650c743-a0f6-4e8b-9db5-2bc8f566e23b","stageMode":"Editing Mode 3","enabled":false,"start":"Sat Aug 05 2023 15:51:08 GMT-0700 (Pacific Daylight Time)","end":"Sat Aug 05 2023 15:51:08 GMT-0700 (Pacific Daylight Time)", "days": 0,"planId":"","createdAt":"2023-08-16T22:51:08.000z","updatedAt":"2023-08-16T22:51:08.000z","printPermission":false,"printVolume":"100"},
          {"id":"e35efd97-ff88-4d6a-ba97-1c91d9c6add7","stageMode":"Editing Mode 4","enabled":false,"start":"Sat Aug 05 2023 15:51:08 GMT-0700 (Pacific Daylight Time)","end":"Sat Aug 05 2023 15:51:08 GMT-0700 (Pacific Daylight Time)", "days": 0,"planId":"","createdAt":"2023-08-16T22:51:08.000z","updatedAt":"2023-08-16T22:51:08.000z","printPermission":false,"printVolume":"100"},
          {"id":"fc9755a3-dec9-4c01-8cda-448afd7ce8e6","stageMode":"Editing Mode 5","enabled":true,"start":"Sat Aug 05 2023 15:51:08 GMT-0700 (Pacific Daylight Time)","end":"Sat Aug 05 2023 15:51:08 GMT-0700 (Pacific Daylight Time)", "days": 2,"planId":"","createdAt":"2023-08-16T22:51:08.000z","updatedAt":"2023-08-16T22:51:08.000z","printPermission":false,"printVolume":"100"}
        ]`,
        updatedAt: new Date(),
        createdAt: new Date(),
        subPlanTypeId: "cb548f9c-36e3-4b4a-9cd7-a0eb01a03014",
        paperSizeId: "b23dc662-c668-42f9-a614-490fd3ae5042",
      },
      {
        id: "99743680-738d-4a2f-9252-8a19211a61f9",
        title: "FixedPlan2",
        planTypeId: "473b39c6-cf63-48cc-83eb-b4d5f3dcfe35",
        owner: "c563bc80-738d-4a2f-9252-8a19211a61f9",
        isRepeatable: `{
          "cycle": "Yearly",
          "value": ["Mar", "Sep"]
        }`,
        sectionId: "537c8fdc-36e3-4b4a-9cd7-a0eb01a03014",
        subsectionId: "b650ccbd-a0f6-4e8b-9db5-2bc8f566e23b",
        stages: `[
          {"id":"537c8f9c-36e3-4b4a-9cd7-a0eb01a03014","stageMode":"Prescription Mode","enabled":true,"start":"2023-08-04T22:51:08.000Z","end":"2023-08-07T22:51:08.000Z","days": 2,"planId":"","createdAt":"2023-08-16T22:51:08.000z","updatedAt":"2023-08-16T22:51:08.000z","printPermission":false,"printVolume":"100"},
          {"id":"993cd480-738d-4a2f-9252-8a19211a61f9","stageMode":"Editing Mode 1","enabled":true,"start":"Sat Aug 05 2023 15:51:08 GMT-0700 (Pacific Daylight Time)","end":"Sat Aug 05 2023 15:51:08 GMT-0700 (Pacific Daylight Time)","days": 2,"planId":"","createdAt":"2023-08-16T22:51:08.000z","updatedAt":"2023-08-16T22:51:08.000z","printPermission":false,"printVolume":"100"},
          {"id":"b5ab6662-c668-42f9-a614-490fd3ae5042","stageMode":"Editing Mode 2","enabled":false,"start":"Sat Aug 05 2023 15:51:08 GMT-0700 (Pacific Daylight Time)","end":"Sat Aug 05 2023 15:51:08 GMT-0700 (Pacific Daylight Time)","days": 0,"planId":"","createdAt":"2023-08-16T22:51:08.000z","updatedAt":"2023-08-16T22:51:08.000z","printPermission":false,"printVolume":"100"},
          {"id":"b650c743-a0f6-4e8b-9db5-2bc8f566e23b","stageMode":"Editing Mode 3","enabled":false,"start":"Sat Aug 05 2023 15:51:08 GMT-0700 (Pacific Daylight Time)","end":"Sat Aug 05 2023 15:51:08 GMT-0700 (Pacific Daylight Time)","days": 0,"planId":"","createdAt":"2023-08-16T22:51:08.000z","updatedAt":"2023-08-16T22:51:08.000z","printPermission":false,"printVolume":"100"},
          {"id":"e35efd97-ff88-4d6a-ba97-1c91d9c6add7","stageMode":"Editing Mode 4","enabled":false,"start":"Sat Aug 05 2023 15:51:08 GMT-0700 (Pacific Daylight Time)","end":"Sat Aug 05 2023 15:51:08 GMT-0700 (Pacific Daylight Time)","days": 0,"planId":"","createdAt":"2023-08-16T22:51:08.000z","updatedAt":"2023-08-16T22:51:08.000z","printPermission":false,"printVolume":"100"},
          {"id":"fc9755a3-dec9-4c01-8cda-448afd7ce8e6","stageMode":"Editing Mode 5","enabled":true,"start":"Sat Aug 05 2023 15:51:08 GMT-0700 (Pacific Daylight Time)","end":"Sat Aug 05 2023 15:51:08 GMT-0700 (Pacific Daylight Time)","days": 2,"planId":"","createdAt":"2023-08-16T22:51:08.000z","updatedAt":"2023-08-16T22:51:08.000z","printPermission":false,"printVolume":"100"}
        ]`,
        updatedAt: new Date(),
        createdAt: new Date(),
        subPlanTypeId: "12736662-c668-42f9-a614-490fd3ae5042",
        paperSizeId: "9563bc80-738d-4a2f-9252-8a19211a61f9",
      },
      {
        id: "bdb42743-a0f6-4e8b-9db5-2bc8f566e23b",
        title: "FixedPlan3",
        planTypeId: "62c44fc0-6a8a-4c74-9933-d3ab328c672d",
        owner: "c563bc80-738d-4a2f-9252-8a19211a61f9",
        isRepeatable: `{
          "cycle": "Monthly",
          "value": [1,2,5,15,28]
        }`,
        sectionId: "993cd480-738d-4a2f-92df-8a19211a61f9",
        subsectionId: "e35efd97-ff88-4d6a-ba97-1cde29c6add7",
        stages: `[
          {"id":"537c8f9c-36e3-4b4a-9cd7-a0eb01a03014","stageMode":"Prescription Mode","enabled":true,"start":"2023-08-04T22:51:08.000Z","end":"2023-08-07T22:51:08.000Z","days": 2,"planId":"","createdAt":"2023-08-16T22:51:08.000z","updatedAt":"2023-08-16T22:51:08.000z","printPermission":false,"printVolume":"100"},
          {"id":"993cd480-738d-4a2f-9252-8a19211a61f9","stageMode":"Editing Mode 1","enabled":true,"start":"Sat Aug 05 2023 15:51:08 GMT-0700 (Pacific Daylight Time)","end":"Sat Aug 05 2023 15:51:08 GMT-0700 (Pacific Daylight Time)","days": 2,"planId":"","createdAt":"2023-08-16T22:51:08.000z","updatedAt":"2023-08-16T22:51:08.000z","printPermission":false,"printVolume":"100"},
          {"id":"b5ab6662-c668-42f9-a614-490fd3ae5042","stageMode":"Editing Mode 2","enabled":false,"start":"Sat Aug 05 2023 15:51:08 GMT-0700 (Pacific Daylight Time)","end":"Sat Aug 05 2023 15:51:08 GMT-0700 (Pacific Daylight Time)","days": 0,"planId":"","createdAt":"2023-08-16T22:51:08.000z","updatedAt":"2023-08-16T22:51:08.000z","printPermission":false,"printVolume":"100"},
          {"id":"b650c743-a0f6-4e8b-9db5-2bc8f566e23b","stageMode":"Editing Mode 3","enabled":false,"start":"Sat Aug 05 2023 15:51:08 GMT-0700 (Pacific Daylight Time)","end":"Sat Aug 05 2023 15:51:08 GMT-0700 (Pacific Daylight Time)","days": 0,"planId":"","createdAt":"2023-08-16T22:51:08.000z","updatedAt":"2023-08-16T22:51:08.000z","printPermission":false,"printVolume":"100"},
          {"id":"e35efd97-ff88-4d6a-ba97-1c91d9c6add7","stageMode":"Editing Mode 4","enabled":false,"start":"Sat Aug 05 2023 15:51:08 GMT-0700 (Pacific Daylight Time)","end":"Sat Aug 05 2023 15:51:08 GMT-0700 (Pacific Daylight Time)","days": 0,"planId":"","createdAt":"2023-08-16T22:51:08.000z","updatedAt":"2023-08-16T22:51:08.000z","printPermission":false,"printVolume":"100"},
          {"id":"fc9755a3-dec9-4c01-8cda-448afd7ce8e6","stageMode":"Editing Mode 5","enabled":true,"start":"Sat Aug 05 2023 15:51:08 GMT-0700 (Pacific Daylight Time)","end":"Sat Aug 05 2023 15:51:08 GMT-0700 (Pacific Daylight Time)","days": 2,"planId":"","createdAt":"2023-08-16T22:51:08.000z","updatedAt":"2023-08-16T22:51:08.000z","printPermission":false,"printVolume":"100"}
        ]`,
        updatedAt: new Date(),
        createdAt: new Date(),
        subPlanTypeId: "537c8f9c-36e3-4b4a-9cd7-a0eb01a03014",
        paperSizeId: "fb3455a3-dec9-4c01-8cda-448afd7ce8e6",
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("fixed_plans", null, {});
  },
};
