const { check } = require('express-validator');
const { validateResult } = require("../utils/handleValidator.js");

const validatorCreateItem = [
    check('id_seguimiento')
        .exists().withMessage('El ID del seguimiento es obligatorio')
        .notEmpty().withMessage('El ID del seguimiento no puede estar vacío')
        .isInt().withMessage('El ID del seguimiento debe ser un número entero'),
    check('id_entrevistador')
        .exists().withMessage('El ID del entrevistador es obligatorio')
        .notEmpty().withMessage('El ID del entrevistador no puede estar vacío')
        .isInt().withMessage('El ID del entrevistador debe ser un número entero'),
    check('observacion')
        .exists().withMessage('La observacion es obligatorio')
        .notEmpty().withMessage('La observacion no puede estar vacío')
        .isLength({ min: 2, max: 2048 }).withMessage('La observacion debe tener entre 2 y 2048 caracteres'),
    check('accion')
        .exists().withMessage('La accion es obligatorio')
        .notEmpty().withMessage('La accion no puede estar vacío')
        .isLength({ min: 2, max: 2048 }).withMessage('La accion debe tener entre 2 y 2048 caracteres'),
    check('id_almacenamiento')
        .exists().withMessage('El ID del almacenamiento es obligatorio')
        .notEmpty().withMessage('El ID del almacenamiento no puede estar vacío')
        .isInt().withMessage('El ID del génalmacenamientoero debe ser un número entero'),
    (req, res, next) => {
        console.log(res.statusCode);
        console.log(res.headers);

        validateResult(req, res, next);
    }
];

const validatorGetItem = [
    check("id")
        .exists().withMessage('El ID entrevista es obligatorio')
        .notEmpty().withMessage('El ID entrevista no puede estar vacío')
        .isInt().withMessage('El ID entrevista debe ser un número entero'),
    (req, res, next) =>  validateResult(req, res, next)
]

module.exports = { validatorCreateItem, validatorGetItem };
