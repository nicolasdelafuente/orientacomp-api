const express = require('express');
const router = express.Router();
const {
  getPaises,
  getAllPaises,
  getPaisById,
} = require('../controllers/pais.controller');

router.get('/', getPaises);
router.get('/getall', getAllPaises);
router.get('/:id', getPaisById);

module.exports = router;
