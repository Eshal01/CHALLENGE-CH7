'use strict';

const bcrypt = require('bcrypt');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const password = await bcrypt.hash('password', 10);

    return queryInterface.bulkInsert('Users', [{
      username: 'admin_mahardika',
      phone: '082121370619',
      email: 'admin_mahardika@gmail.com',
      password,
      role_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
