const express = require('express');
const { getProvincias } = require('../controllers/provincia.controller');
const router = express.Router();

router.get('/', getProvincias);

module.exports = router;
