const express = require('express');
const {
  getProvincias,
  getProvinciaById,
} = require('../controllers/provincia.controller');
const router = express.Router();

router.get('/', getProvincias);
router.get('/:id', getProvinciaById);

module.exports = router;
