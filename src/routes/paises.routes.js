const express = require('express');
const router = express.Router();
const {
  getPaises,
  getAllPaises,
  getPaisById,
  createPais,
  updatePais,
  deletePais,
} = require('../controllers/pais.controller');

router.get('/', getPaises);
router.get('/getall', getAllPaises);
router.get('/:id', getPaisById);
router.post('/', createPais);
router.patch('/:id', updatePais);
router.delete('/:id', deletePais);

module.exports = router;
