const express = require('express');
const fs = require('fs');
const path = require('path');

const router = express.Router();
const routesPath = path.join(__dirname);

fs.readdirSync(routesPath).forEach(file => {
  if (file !== 'index.js' && file.endsWith('.js')) {
    const routeName = file.split('.')[0];
    const route = require(path.join(routesPath, file));
    router.use(`/${routeName}`, route);
  }
});

module.exports = router;
