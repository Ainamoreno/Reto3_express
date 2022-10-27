const { DataTypes, Model } = require('sequelize')
const sequelize = require('../db/db')

class Cajas extends Model { }

Cajas.init({
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
},
{
    sequelize,
    modelName: "cajas",
    freezeTableName: true,
    timestamps: false
});

module.exports = router