export default (sequelize, Sequelize) => {
  return sequelize.define("plans", {
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
      allowNull: true,
      references: {
        model: {
          tableName: "subsections",
          key: "id",
        },
      },
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
      allowNull: true,
      references: {
        model: {
          tableName: "subPlan_types",
          key: "id",
        },
      },
    },
    completed: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    paperSizeId: {
      type: Sequelize.STRING,
      references: {
        model: {
          tableName: "paper_sizes",
          key: "id",
        },
      },
      allowNull: false,
    },
  });
};
