'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('cajas', [
      {
        cajaId: 1,
        contenido: 'Vasos',
        valor: 50,
        almacenId: 2
      },
      {
        cajaId: 2,
        contenido: 'Platos',
        valor: 500,
        almacenId: 3
      },
      {
        cajaId: 3,
        contenido: 'Cuchillos',
        valor: 150,
        almacenId: 1
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
