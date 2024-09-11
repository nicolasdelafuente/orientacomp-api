const express = require('express');
const { getPaises } = require('../controllers/pais.controller');

const router = express.Router();

router.get('/', getPaises);

module.exports = router;
