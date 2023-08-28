const { DataTypes } = require("sequelize")

module.exports = (sequelize) => {
    sequelize.define(
        "driver",
        {
            id: {

            },
            nombre: {
                type: DataTypes.STRING,
                allowNull: false
            }, 
            apellido: {
                type: DataTypes.STRING,
                allowNull: false
                
            },
            descripcion:{
                type: DataTypes.STRING,
                allowNull: false
                
            },
            imagen: {
                
            },
            nacionalidad: {
                type: DataTypes.STRING,
                allowNull: false
                
            },
            fechaDeNacimiento: {
                type: DataTypes.STRING,
                allowNull: false
                
            }
        }, { timestamps: false }
    )
}