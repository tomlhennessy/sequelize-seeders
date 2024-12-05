'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Colors', [
      { name: 'purple', createdAt: new Date('2023-01-01'), updatedAt: new Date('2023-01-01') },
      { name: 'green', createdAt: new Date('2022-12-01'), updatedAt: new Date('2022-12-01') },
      { name: 'orange', createdAt: new Date('2021-11-01'), updatedAt: new Date('2021-11-01') },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Colors', {
      name: { [Sequelize.Op.in]: ['purple', 'green', 'orange'] }
    }, {});
  }
};
