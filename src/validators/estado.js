const { check } = require('express-validator');
const { validateResult } = require("../utils/handleValidator.js");

const validatorCreateItem = [
    check('nombre')
        .exists().withMessage('El nombre es obligatorio')
        .notEmpty().withMessage('El nombre no puede estar vacío')
        .isLength({ min: 2, max: 32 }).withMessage('El nombre debe tener entre 2 y 32 caracteres'),
    check('color')
        .exists().withMessage('El color es obligatorio')
        .notEmpty().withMessage('El color no puede estar vacío')
        .isLength({ min: 2, max: 32 }).withMessage('El color debe tener entre 2 y 32 caracteres'),
    (req, res, next) => {
        console.log(res.statusCode);
        console.log(res.headers);

        validateResult(req, res, next);
    }
];

const validatorGetItem = [
    check("id")
        .exists().withMessage('El ID estado es obligatorio')
        .notEmpty().withMessage('El ID estado no puede estar vacío')
        .isInt().withMessage('El ID estado debe ser un número entero'),
    (req, res, next) =>  validateResult(req, res, next)
]

module.exports = { validatorCreateItem, validatorGetItem };
