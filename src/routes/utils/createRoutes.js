const { singularize } = require('../../utils/inflector');
const { getSingularFileName } = require('../../utils/fileNameLoader');
const generateRoutes = require('./genericRouteGenerator');

function createRoutes(filename) {
  const pluralName = getSingularFileName(filename);
  const singularName = singularize(pluralName);
  const controllerPath = `../../controllers/${singularName}.controller.js`;
  const controller = require(controllerPath);

  return generateRoutes(controller);
}

module.exports = createRoutes;