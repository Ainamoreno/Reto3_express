const { DataTypes, Model} = require('sequelize')
const sequelize = require("../db/db")

class Almacenes extends Model {}

Almacenes.init({
    almacenId : {
        type : DataTypes.INTEGER,
        primaryKey:true,
        allowNull: false,
        autoIncrement:true
    },
    lugar: DataTypes.STRING,
    capacidad: DataTypes.STRING
},
{
    sequelize,
    modelName: "almacenes",
    freezeTableName:true,
    timestamps:false
})