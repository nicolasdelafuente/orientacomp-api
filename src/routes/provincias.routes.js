const express = require('express');
const {
  getProvincias,
  getAllProvincias,
  getProvinciaById,
  createProvincia,
  deleteProvincia,
} = require('../controllers/provincia.controller');
const router = express.Router();

router.get('/', getProvincias);
router.get('/getall', getAllProvincias);
router.get('/:id', getProvinciaById);
router.post('/', createProvincia);
router.delete('/:id', deleteProvincia);

module.exports = router;
