const createController = require('./utils/createController');
const Pais = require('../database/models/Pais.model');

if (!Pais) {
  console.error('El modelo Pais no se ha importado correctamente.');
}

const relations = [{ model: Pais, as: 'pais' }];
const excludeAttributes = ['id_pais'];

module.exports = createController(__filename, {
  relations,
  excludeAttributes,
});
