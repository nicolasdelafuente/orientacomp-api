const express = require('express');
const {
  getProvincias,
  getAllProvincias,
  getProvinciaById,
  createProvincia,
} = require('../controllers/provincia.controller');
const router = express.Router();

router.get('/', getProvincias);
router.get('/getall', getAllProvincias);
router.get('/:id', getProvinciaById);
router.post('/', createProvincia);
module.exports = router;
