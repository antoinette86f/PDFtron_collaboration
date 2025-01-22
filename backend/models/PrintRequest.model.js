export default (sequelize, Sequelize) => {
  return sequelize.define("print_requests", {
    id: {
      type: Sequelize.STRING,
      primaryKey: true,
    },
    planId: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    title: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    stage: {
      type: Sequelize.INTEGER,
      allowNull: true,
    },
    status: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    pagesCount: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    printVolume: {
      type: Sequelize.INTEGER,
      allowNull: true,
    },
    documentId: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    start: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    end: {
      type: Sequelize.DATE,
      allowNull: true,
    },
    section: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    subSection: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    paperSize: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    fileType: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    note: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    createdAt: {
      type: Sequelize.DATE,
    },
    updatedAt: {
      type: Sequelize.DATE,
    },
  });
};
