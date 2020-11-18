'use strict';

const faker = require('faker');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Clients', [
      {
        surname: faker.name.lastName(),
        name: faker.name.firstName(),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        surname: faker.name.lastName(),
        name: faker.name.firstName(),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        surname: faker.name.lastName(),
        name: faker.name.firstName(),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        surname: faker.name.lastName(),
        name: faker.name.firstName(),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        surname: faker.name.lastName(),
        name: faker.name.firstName(),
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {})
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Clients', null, {});
  }
};
