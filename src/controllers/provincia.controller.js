const { Op } = require('sequelize');
const Provincia = require('../database/models/Provincia.model');
const Pais = require('../database/models/Pais.model');
const { getAll, getOne, create } = require('./utils/genericController');

const commonOptions = {
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

const getProvincias = async (req, res) => {
  const options = {
    ...commonOptions,
    where: {
      is_deleted: false,
    },
  };

  await getAll(Provincia, req, res, options);
};

const getAllProvincias = async (req, res) => {
  const options = {
    ...commonOptions,
    excludeDefaultAttributes: false,
    where: {
      [Op.or]: [{ is_deleted: true }, { is_deleted: false }],
    },
  };

  await getAll(Provincia, req, res, options);
};

const getProvinciaById = async (req, res) => {
  const options = {
    ...commonOptions,
  };

  await getOne(Provincia, req, res, options);
};

const createProvincia = async (req, res) => {
  await create(Provincia, req, res);
};

module.exports = {
  getProvincias,
  getAllProvincias,
  getProvinciaById,
  createProvincia,
};
