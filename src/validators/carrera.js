const { check } = require('express-validator');
const { validateResults } = require("../utils/handleValidator.js");

const validatorCreateItem = [
    check("nombre")
        .exists()
        .notEmpty(),
    check("id_instituto")
        .exists()
        .notEmpty(),
    (req, res, next) => {
        validateResults(req, res, next);
    }
];

module.exports = { validatorCreateItem };
