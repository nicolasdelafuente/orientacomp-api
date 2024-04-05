const { check } = require('express-validator');
const { validateResult } = require("../utils/handleValidator.js");

const validatorCreateItem = [
    check('id_persona')
        .exists().withMessage('El ID de la persona es obligatorio')
        .notEmpty().withMessage('El ID de la persona no puede estar vacío')
        .isInt().withMessage('El ID de la persona debe ser un número entero'),
    check('id_rol')
        .exists().withMessage('El ID del rol es obligatorio')
        .notEmpty().withMessage('El ID del rol no puede estar vacío')
        .isInt().withMessage('El ID del rol debe ser un número entero'),
    check('password')
        .exists().withMessage('El password es obligatorio')
        .notEmpty().withMessage('El password no puede estar vacío')
        .isLength({ min: 6, max: 16 }).withMessage('El password debe tener entre 6 y 16 caracteres'),
    (req, res, next) => {
        console.log(res.statusCode);
        console.log(res.headers);

        validateResult(req, res, next);
    }
];

const validatorGetItem = [
    check("id")
        .exists().withMessage('El ID usuario es obligatorio')
        .notEmpty().withMessage('El ID usuario no puede estar vacío')
        .isInt().withMessage('El ID usuario debe ser un número entero'),
    (req, res, next) =>  validateResult(req, res, next)
]

module.exports = { validatorCreateItem, validatorGetItem };
