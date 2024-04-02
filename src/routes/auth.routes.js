const express = require('express');
const router = express.Router();
const { registrerControl, loginControl } = require("../controllers/auth.controller.js");
const { validatorRegister, validatorLogin } = require("../validators/auth.js");
const { matchedData } = require('express-validator');

/**
 * Ruta para registrar un nuevo usuario.
 * @method POST
 * @endpoint /register
 * @middleware validatorRegister - Middleware para validar los datos de registro.
 * @controller registrerControl - Controlador encargado del registro de usuarios.
 */
router.post("/register", validatorRegister, registrerControl);+
/*
router.post("/register", validatorRegister, (req, res) => {
    req = matchedData(req);

    res.send({data:req})
});
*/
/**
 * Ruta para iniciar sesión de un usuario existente.
 * @method POST
 * @endpoint /login
 * @middleware validatorLogin - Middleware para validar los datos de inicio de sesión.
 * @controller loginControl - Controlador encargado de gestionar la autenticación de usuarios.
 */
router.post("/login", validatorLogin, loginControl);


module.exports = router;