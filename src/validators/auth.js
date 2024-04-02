const { check } = require("express-validator");
const { validateResult } = require("../utils/handleValidator.js");


const validatorLogin = [
    check("password")
        .exists()
        .notEmpty()
        .isLength({ min: 8, max: 16 }),
    check("email")
        .exists()
        .notEmpty()
        .isEmail(),
    (req, res, next) => validateResult(req, res, next)
];

const validatorRegister = [
    check("id_persona")
        .exists()
        .notEmpty()
        .isInt().withMessage('El ID persona debe ser un número entero'),
    check("password")
        .exists()
        .notEmpty()
        .isLength({ min: 8, max: 16 }),
    check("id_rol")
        .exists()
        .notEmpty()
        .isInt().withMessage('El ID rol debe ser un número entero'),
    (req, res, next) => validateResult(req, res, next)
];

module.exports = { validatorRegister, validatorLogin };