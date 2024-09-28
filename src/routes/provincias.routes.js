const express = require('express');
const {
  getProvincias,
  getAllProvincias,
  getProvinciaById,
} = require('../controllers/provincia.controller');
const router = express.Router();

router.get('/', getProvincias);
router.get('/getall', getAllProvincias);
router.get('/:id', getProvinciaById);

module.exports = router;
