const { check } = require('express-validator');
const { validateResult } = require("../utils/handleValidator.js");

const validatorCreateItem = [
    check('nombre')
        .exists().withMessage('El nombre es obligatorio')
        .notEmpty().withMessage('El nombre no puede estar vacío')
        .isLength({ min: 2, max: 32 }).withMessage('El nombre debe tener entre 2 y 32 caracteres'),
    check('apellido')
        .exists().withMessage('El apellido es obligatorio')
        .notEmpty().withMessage('El apellido no puede estar vacío')
        .isLength({ min: 2, max: 32 }).withMessage('El apellido debe tener entre 2 y 32 caracteres'),
    check('apellido')
        .exists().withMessage('El email es obligatorio')
        .notEmpty().withMessage('El email no puede estar vacío')
        .isEmail().withMessage('Debe ingresar un correo electrónico válido'),
    check('id_documento')
        .exists().withMessage('El ID del documento es obligatorio')
        .notEmpty().withMessage('El ID del documento no puede estar vacío')
        .isInt().withMessage('El ID del documento debe ser un número entero'),
    check('documento')
        .exists().withMessage('El número de documento es obligatorio')
        .notEmpty().withMessage('El número de documento no puede estar vacío')
        .isLength({ min: 6, max: 16 }).withMessage('El número de documento debe tener entre 6 y 16 caracteres'),
    check('telefono')
        .exists().withMessage('El teléfono es obligatorio')
        .notEmpty().withMessage('El teléfono no puede estar vacío')
        .isLength({ min: 6, max: 16 }).withMessage('El teléfono debe tener entre 6 y 16 caracteres'),
    check('id_genero')
        .exists().withMessage('El ID del género es obligatorio')
        .notEmpty().withMessage('El ID del género no puede estar vacío')
        .isInt().withMessage('El ID del género debe ser un número entero'),
    check('direccion')
        .exists().withMessage('La dirección es obligatoria')
        .notEmpty().withMessage('La dirección no puede estar vacía')
        .isLength({ min: 5 }).withMessage('La dirección debe tener al menos 5 caracteres'),
    check('id_pais')
        .exists().withMessage('El ID del país es obligatorio')
        .notEmpty().withMessage('El ID del país no puede estar vacío')
        .isInt().withMessage('El ID del país debe ser un número entero'),
    check('id_provincia')
        .exists().withMessage('El ID del provincia es obligatorio')
        .notEmpty().withMessage('El ID del provincia no puede estar vacío')
        .isInt().withMessage('El ID del provincia debe ser un número entero'),
    check('id_localidad')
        .exists().withMessage('El ID del localidad es obligatorio')
        .notEmpty().withMessage('El ID del localidad no puede estar vacío')
        .isInt().withMessage('El ID del localidad debe ser un número entero'),
    check('id_carrera')
        .exists().withMessage('El ID del localidad es obligatorio')
        .notEmpty().withMessage('El ID del localidad no puede estar vacío')
        .isInt().withMessage('El ID del localidad debe ser un número entero'),     
    (req, res, next) => {
        console.log(res.statusCode);
        console.log(res.headers);

        validateResult(req, res, next);
    }
];

const validatorGetItem = [
    check("id")
        .exists().withMessage('El ID persona es obligatorio')
        .notEmpty().withMessage('El ID persona no puede estar vacío')
        .isInt().withMessage('El ID persona debe ser un número entero'),
    (req, res, next) =>  validateResult(req, res, next)
]

module.exports = { validatorCreateItem, validatorGetItem };
