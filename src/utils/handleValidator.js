/**
 * Middleware para validar los resultados de una petición.
 * @param {Object} req - Objeto de solicitud de Express.
 * @param {Object} res - Objeto de respuesta de Express.
 * @param {Function} next - Función de siguiente middleware.
 * @returns {void}
 */


const { validationResult } = require("express-validator");

const validateResult = (req, res, next) => {
    try {
        validationResult(req).throw();
        return next();
    } catch (err) {
        res.status(403);
        res.send({ errors: err.array() });
    }
}

module.exports = { validateResult };