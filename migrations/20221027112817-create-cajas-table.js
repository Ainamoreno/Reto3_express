'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.createTable('users', { 
      cajaId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    contenido: DataTypes.STRING,
    valor: DataTypes.INTEGER,
    almacenId : {
        type: DataTypes.INTEGER,
        references: {
            model: "almacenes",
            key: "almacenId"
        }
    }
    });

  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
