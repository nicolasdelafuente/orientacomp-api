const express = require('express');

function generateRoutes(controller) {
  const router = express.Router();

  router.get('/', controller.getItems);
  router.get('/all', controller.getItems);
  router.get('/:id', controller.getItemById);
  router.get('/:id/all', controller.getItemById);
  router.post('/', controller.createItem);
  router.patch('/:id', controller.updateItem);
  router.delete('/:id', controller.deleteItem);

  return router;
}

module.exports = generateRoutes;