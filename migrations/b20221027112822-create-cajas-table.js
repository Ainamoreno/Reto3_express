'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('cajas', { 
      cajaId : {
        type : Sequelize.INTEGER,
        primaryKey:true,
        allowNull: false,
        autoIncrement:true
    },
    contenido: Sequelize.STRING,
    valor: Sequelize.INTEGER,
    almacenId : {
        type: Sequelize.INTEGER,
        references: {
            model:"almacenes",
            key:"almacenId"
        }
    } 
    });
     
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
