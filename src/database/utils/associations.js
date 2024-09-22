function applyAssociations(sequelize) {
  const { Pais, Provincia } = sequelize.models;

  try {
    if (!Pais.associations.provinciasDelPais) {
      Pais.hasMany(Provincia, {
        foreignKey: 'id_pais',
        as: 'provinciasDelPais',
      });
    }

    if (!Provincia.associations.pais) {
      Provincia.belongsTo(Pais, {
        foreignKey: 'id_pais',
        as: 'pais',
      });
    }
  } catch (error) {
    console.error('Error applying associations:', error);
    throw new Error('Failed to apply associations: ' + error.message);
  }
}

module.exports = applyAssociations;
