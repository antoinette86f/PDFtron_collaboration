export default (sequelize, Sequelize) => {
  return sequelize.define("fixed_plans", {
    id: {
      type: Sequelize.STRING(36),
      primaryKey: true,
    },
    title: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    stages: {
      type: Sequelize.TEXT,
      allowNull: true,
    },
    owner: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    isRepeatable: {
      type: Sequelize.TEXT,
      allowNull: false,
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
