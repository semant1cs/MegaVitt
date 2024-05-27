'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const { v4: uuidv4 } = require('uuid');
    await queryInterface.bulkInsert(
      'roles',
      [
        {
          id: uuidv4(),
          value: 'admin',
          description: 'Может добавлять,удалять,изменять пользователей и принадлежащие им сайты',
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        },
        {
          id: uuidv4(),
          value: 'user',
          description: 'Может добавлять,удалять, изменять собственные сайты',
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('roles', null, {});
  },
};
