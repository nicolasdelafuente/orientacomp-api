const { check } = require('express-validator');
const { validateResult } = require("../utils/handleValidator.js");

const validatorCreateItem = [
    check('id_seguimiento_tipo')
        .exists().withMessage('El ID del seguimiento_tipo es obligatorio')
        .notEmpty().withMessage('El ID del seguimiento_tipo no puede estar vacío')
        .isInt().withMessage('El ID del seguimiento_tipo debe ser un número entero'),
    check('id_categoria')
        .exists().withMessage('El ID de la categoria es obligatorio')
        .notEmpty().withMessage('El ID de la categoria no puede estar vacío')
        .isInt().withMessage('El ID de la categoria debe ser un número entero'),
    check('id_estado')
        .exists().withMessage('El ID del estado es obligatorio')
        .notEmpty().withMessage('El ID del estado no puede estar vacío')
        .isInt().withMessage('El ID del estado debe ser un número entero'),
    check('id_orientado')
        .exists().withMessage('El ID del orientado es obligatorio')
        .notEmpty().withMessage('El ID del orientado no puede estar vacío')
        .isInt().withMessage('El ID del orientado debe ser un número entero'),
    check('id_seguidor')
        .exists().withMessage('El ID del seguidor es obligatorio')
        .notEmpty().withMessage('El ID del seguidor no puede estar vacío')
        .isInt().withMessage('El ID del seguidor debe ser un número entero'),
    check('motivo')
        .exists().withMessage('El motivo es obligatorio')
        .notEmpty().withMessage('El motivo no puede estar vacío')
        .isLength({ min: 2, max: 32 }).withMessage('El motivo debe tener entre 2 y 32 caracteres'),
    (req, res, next) => {
        console.log(res.statusCode);
        console.log(res.headers);

        validateResult(req, res, next);
    }
];

const validatorGetItem = [
    check("id")
        .exists().withMessage('El ID seguimiento es obligatorio')
        .notEmpty().withMessage('El ID seguimiento no puede estar vacío')
        .isInt().withMessage('El ID seguimiento debe ser un número entero'),
    (req, res, next) =>  validateResult(req, res, next)
]

module.exports = { validatorCreateItem, validatorGetItem };
