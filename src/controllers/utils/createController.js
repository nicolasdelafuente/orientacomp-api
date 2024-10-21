const { getSingularFileName } = require('../../utils/fileNameLoader');
const { createGenericController } = require('./genericController');

function createController(filename, options = {}) {
  const modelName = capitalizeFirstLetter(getSingularFileName(filename));
  const Model = require(`../../database/models/${modelName}.model`);
  return createGenericController(Model, options);
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

module.exports = createController;
