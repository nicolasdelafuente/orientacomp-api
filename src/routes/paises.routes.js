const express = require('express');
const router = express.Router();
const { getPaises } = require('../controllers/pais.controller');

router.get('/', getPaises);

module.exports = router;
