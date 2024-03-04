'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Entrevista extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Entrevista.init({
    id_seguimiento: DataTypes.INTEGER,
    id_entrevistador: DataTypes.INTEGER,
    observacion: DataTypes.STRING,
    accion: DataTypes.STRING,
    id_almacenamiento: DataTypes.INTEGER,
    deleted: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Entrevista',
  });
  return Entrevista;
};