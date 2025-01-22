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
    return queryInterface.createTable(
      "tokens",
      {
        id: {
          type: Sequelize.STRING(36),
          primaryKey: true,
        },
        token: {
          type: Sequelize.STRING,
          allowNull: false,
          unique: true,
        },
        type: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        userId: {
          type: Sequelize.STRING,
          references: {
            model: {
              tableName: "users",
              key: "id",
            },
          },
        },
        expiredAt: {
          type: Sequelize.DATE,
          allowNull: false,
        },
      },
      {
        timestamps: false,
      },
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    return queryInterface.dropTable("tokens");
  },
};
