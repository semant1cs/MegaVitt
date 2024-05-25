'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('tickets', {
      id: {
        type: Sequelize.DataTypes.STRING,
        unique: true,
        primaryKey: true,
        allowNull: false,
      },
      owner_id: {
        type: Sequelize.DataTypes.STRING,
      },
      cost: {
        type: Sequelize.DataTypes.INTEGER,
        defaultValue: 0,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('tickets');
  },
};
