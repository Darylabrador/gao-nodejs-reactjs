'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Desktops',[
      {
        name: 'pc1',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'pc2',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'pc3',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'pc4',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'pc5',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {})
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Desktops', null, {});
  }
};
