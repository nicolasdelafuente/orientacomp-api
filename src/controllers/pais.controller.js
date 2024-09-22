const Pais = require('../database/models/Pais.model');
const { getAll } = require('./utils/genericController');

const getPaises = async (req, res) => {
  const options = {
    excludeDefaultAttributes: true,
  };

  await getAll(Pais, req, res, options);
};

module.exports = {
  getPaises,
};
