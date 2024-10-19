const { getSingularFileName } = require('../../utils/fileNameLoader');
const { createGenericController } = require('./genericController');

function createController(filename) {
  const modelName = capitalizeFirstLetter(getSingularFileName(filename));
  const Model = require(`../../database/models/${modelName}.model`);
  return createGenericController(Model);
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

module.exports = createController;
