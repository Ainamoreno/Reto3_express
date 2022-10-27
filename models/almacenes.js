const { DataTypes, Model } = require('sequelize')
const sequelize = require('../db/db')

class Almacenes extends Model { }

Almacenes.init({
    almacenId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    lugar: DataTypes.STRING,
    capacidad: DataTypes.STRING
},
{
    sequelize,
    modelName: "almacenes",
    //FreezeTableName nos conserva el nombre en vez de ponerlo en plural
    freezeTableName: true,
    //Evita que sequelize nos genere los campos createdAt y modifiedAt en la tabla
    timestamps: false
});

module.exports = router
