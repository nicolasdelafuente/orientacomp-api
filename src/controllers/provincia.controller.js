const Provincia = require('../database/models/Provincia.model');
const Pais = require('../database/models/Pais.model');
const { getAll, getOne } = require('./utils/genericController');

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

const getProvinciaById = async (req, res) => {
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

  await getOne(Provincia, req, res, options);
};

module.exports = {
  getProvincias,
  getProvinciaById,
};
