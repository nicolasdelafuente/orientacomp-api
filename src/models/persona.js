'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Persona extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Persona.init({
    nombre: DataTypes.STRING,
    apellido: DataTypes.STRING,
    email: DataTypes.STRING,
    id_documento: DataTypes.INTEGER,
    documento: DataTypes.STRING,
    telefono: DataTypes.STRING,
    id_genero: DataTypes.INTEGER,
    direccion: DataTypes.STRING,
    id_pais: DataTypes.INTEGER,
    id_provincia: DataTypes.INTEGER,
    id_localidad: DataTypes.INTEGER,
    id_carrera: DataTypes.INTEGER,
    deleted: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Persona',
  });
  return Persona;
};