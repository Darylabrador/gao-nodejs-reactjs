'use strict';

const bcrypt = require('bcryptjs');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const email = "admin@gmail.com";
    const password = await bcrypt.hash('123456', 12);
    const currentDate = new Date();
    
    const createdAt = currentDate;
    const updatedAt = currentDate;

    let data = { email, password, createdAt, updatedAt};
    await queryInterface.bulkInsert('Users', [data], {})

  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
