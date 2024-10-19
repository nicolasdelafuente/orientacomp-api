const path = require('path');
const { singularize } = require('./inflector');

function getFileName(filename) {
  const name = path.basename(filename).split('.')[0];
  return name.charAt(0).toLowerCase() + name.slice(1);
}

function getSingularFileName(filename) {
  const name = getFileName(filename);
  return singularize(name);
}

module.exports = {
  getFileName,
  getSingularFileName,
};
