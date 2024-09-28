const Rol = require('../database/models/Rol.model');
const {
  getAll,
  getOne,
  create,
  update,
  softDelete,
} = require('./utils/genericController');

const getRoles = async (req, res) => {
  const options = {
    excludeDefaultAttributes: true,
  };

  await getAll(Rol, req, res, options);
};

const getAllRoles = async (req, res) => {
  const { isDeleted } = req.query;

  const options = {
    excludeDefaultAttributes: false,
    where: {},
  };

  if (isDeleted === 'true' || isDeleted === 'false') {
    options.where.is_deleted = isDeleted === 'true';
  }

  await getAll(Rol, req, res, options);
};

const getRolById = async (req, res) => {
  const options = {
    excludeDefaultAttributes: true,
  };

  await getOne(Rol, req, res, options);
};

const createRol = async (req, res) => {
  await create(Rol, req, res);
};

const updateRol = async (req, res) => {
  await update(Rol, req, res);
};

const deleteRol = async (req, res) => {
  await softDelete(Rol, req, res);
};

module.exports = {
  getRoles,
  getAllRoles,
  getRolById,
  createRol,
  updateRol,
  deleteRol,
};
