'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Localidad extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Localidad.init({
    nombre: {
    type: DataTypes.STRING,
    allowNull: true
  },
    id_provincia: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    deleted: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Localidad',
    tableName: 'Localidades'
  });
  return Localidad;
};