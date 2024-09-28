const express = require('express');
const router = express.Router();
const {
  getPaises,
  getAllPaises,
  getPaisById,
  createPais,
} = require('../controllers/pais.controller');

router.get('/', getPaises);
router.get('/getall', getAllPaises);
router.get('/:id', getPaisById);
router.post('/', createPais);
module.exports = router;
