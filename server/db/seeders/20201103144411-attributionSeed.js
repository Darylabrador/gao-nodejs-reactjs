'use strict';

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
    var data = [];
    var currentDate = new Date();
    var tomorrow = new Date(currentDate.getTime()+1000*60*60*24);

    for (let i = 1; i < 5; i++) {
      data.push({
        clientId: i,
        desktopId: i,
        date: currentDate,
        hours: "8",
        createdAt: currentDate,
        updatedAt: currentDate
      })
    }
    
    for (let i = 1; i < 5; i++) {
      data.push({
        clientId: i,
        desktopId: i,
        date: currentDate,
        hours: "10",
        createdAt: currentDate,
        updatedAt: currentDate
      })
    }

    for (let i = 1; i < 5; i++) {
      data.push({
        clientId: i,
        desktopId: i,
        date: currentDate,
        hours: "15",
        createdAt: currentDate,
        updatedAt: currentDate
      })
    }


    for (let i = 1; i < 5; i++) {
      data.push({
        clientId: i,
        desktopId: i,
        date: tomorrow,
        hours: "8",
        createdAt: tomorrow,
        updatedAt: tomorrow
      })
    }

    for (let i = 1; i < 5; i++) {
      data.push({
        clientId: i,
        desktopId: i,
        date: tomorrow,
        hours: "10",
        createdAt: tomorrow,
        updatedAt: tomorrow
      })
    }

    for (let i = 1; i < 5; i++) {
      data.push({
        clientId: i,
        desktopId: i,
        date: tomorrow,
        hours: "15",
        createdAt: tomorrow,
        updatedAt: tomorrow
      })
    }

    await queryInterface.bulkInsert('Attributions', data, {})
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Attributions', null, {});
  }
};
