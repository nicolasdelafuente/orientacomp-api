'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Seguimiento extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Seguimiento.init({
    id_seguimiento_tipo: DataTypes.INTEGER,
    id_categoria: DataTypes.INTEGER,
    id_estado: DataTypes.INTEGER,
    id_orientado: DataTypes.INTEGER,
    id_seguidor: DataTypes.INTEGER,
    motivo: DataTypes.STRING,
    deleted: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Seguimiento',
  });
  return Seguimiento;
};