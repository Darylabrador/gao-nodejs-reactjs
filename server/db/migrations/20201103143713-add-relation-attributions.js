'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('attributions', 'clientId', {
        type: Sequelize.INTEGER,
        references: {
          model: 'Clients',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
    })

    await queryInterface.addColumn('attributions','desktopId', {
      type: Sequelize.INTEGER,
      references: {
        model: 'Desktops',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('attributions', 'clientId')
    await queryInterface.removeColumn('attributions', 'desktopId')
  }
};
