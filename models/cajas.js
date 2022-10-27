const { DataTypes, Model } = require('sequelize')
const sequelize = require('../db/db')

class Cajas extends Model {}

Cajas.init({
    cajaId:   {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    contenido: DataTypes.STRING, 
    valor: DataTypes.INTEGER, 
    almacenId: {
        type: DataTypes.INTEGER,
        references: {
            model:"almacenes", 
            key:"almacenID"
        }
    }
},
{
    sequelize,
    modelName: "cajas",
    //FreezeTableName nos conserva el nombre en vez de ponerlo en plural
    freezeTableName: true,
    //Evita que sequelize nos genere los campos createdAt y modifiedAt en la tabla
    timestamps: false
})

module.exports = Cajas