const Provincia = require('../database/models/Provincia.model');
const Pais = require('../database/models/Pais.model');
const { getAll } = require('./utils/genericController');

const getProvincias = async (req, res) => {
  const options = {
    relations: [
      {
        model: Pais,
        as: 'pais',
        attributes: ['id', 'nombre'],
        where: {
          is_deleted: false,
        },
      },
    ],
    excludeAttributes: ['id_pais'],
  };

  await getAll(Provincia, req, res, options);
};

module.exports = {
  getProvincias,
};
