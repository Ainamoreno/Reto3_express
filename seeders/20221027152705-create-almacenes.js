'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('almacenes', [
      {
        almacenId: 1,
        lugar: 'Valencia',
        capacidad: '20.000'

      },
      {
        almacenId: 2,
        lugar: 'Madrid',
        capacidad: '50.000'

      },
      {
        almacenId: 3,
        lugar: 'Barcelona',
        capacidad: '45.000'

      }
    ], {});

  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
