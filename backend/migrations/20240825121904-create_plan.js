"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    return queryInterface.createTable("plans", {
      id: {
        type: Sequelize.STRING(36),
        primaryKey: true,
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      owner: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      stages: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      startDate: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      endDate: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      publishDate: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      currentStage: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      sectionId: {
        type: Sequelize.STRING,
        references: {
          model: {
            tableName: "sections",
            key: "id",
          },
        },
        allowNull: true,
      },
      subsectionId: {
        type: Sequelize.STRING,
        references: {
          model: {
            tableName: "subsections",
            key: "id",
          },
        },
        allowNull: true,
      },
      planTypeId: {
        type: Sequelize.STRING,
        references: {
          model: {
            tableName: "plan_types",
            key: "id",
          },
        },
      },
      subPlanTypeId: {
        type: Sequelize.STRING,
        references: {
          model: {
            tableName: "subPlan_types",
            key: "id",
          },
        },
        allowNull: true,
      },
      completed: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      createdAt: {
        type: Sequelize.DATE,
      },
      updatedAt: {
        type: Sequelize.DATE,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    return queryInterface.dropTable("plans");
  },
};
