const Pais = require('../database/models/Pais.model');
const {
  getAll,
  getOne,
  create,
  softDelete,
} = require('./utils/genericController');

const getPaises = async (req, res) => {
  const options = {
    excludeDefaultAttributes: true,
  };

  await getAll(Pais, req, res, options);
};

const getAllPaises = async (req, res) => {
  const { isDeleted } = req.query;

  const options = {
    excludeDefaultAttributes: false,
    where: {},
  };

  if (isDeleted === 'true' || isDeleted === 'false') {
    options.where.is_deleted = isDeleted === 'true';
  }

  await getAll(Pais, req, res, options);
};

const getPaisById = async (req, res) => {
  const options = {
    excludeDefaultAttributes: true,
  };

  await getOne(Pais, req, res, options);
};

const createPais = async (req, res) => {
  await create(Pais, req, res);
};

const deletePais = async (req, res) => {
  await softDelete(Pais, req, res);
};

module.exports = {
  getPaises,
  getAllPaises,
  getPaisById,
  createPais,
  deletePais,
};
