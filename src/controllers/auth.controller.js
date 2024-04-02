const { Usuario, Persona } = require("../models");
const { matchedData } = require('express-validator');
const { checkUniqueField } = require("../utils/checkUniqueField.js");
const { encrypt, compare } = require("../utils/handlePassword.js");
const { tokenSign } = require("../utils/handleJWT.js");
const { handleHttpError } = require("../utils/handleError.js");

/**
 * Controlador responsable de registrar un nuevo usuario.
 * @param {Object} req - Objeto de solicitud de Express.
 * @param {Object} res - Objeto de respuesta de Express.
 */
const registrerControl = async (req, res) => {
    try {
        const requestData = matchedData(req);
        const encryptedPassword = await encrypt(requestData.password);

        const uniqueFieldCheck = await checkUniqueField(Usuario, 'id_persona', requestData.id_persona);
        if (uniqueFieldCheck) {
          return handleHttpError(res, uniqueFieldCheck.error, uniqueFieldCheck.statusCode);
        }

        const dataUser = await Usuario.create({
            ...requestData,
            password: encryptedPassword,
        });
        //delete dataUser.dataValues.password;

        const data = {
            user: dataUser,
            token: await tokenSign(dataUser)
        }

        res.send({ data });
    } catch (e) {
        handleHttpError(res, e.message, 'ERROR_REGISTER_USER');
    }
}

/**
 * Controlador responsable de autenticar a un usuario durante el inicio de sesión.
 * @param {Object} req - Objeto de solicitud de Express.
 * @param {Object} res - Objeto de respuesta de Express.
 */
const loginControl = async (req, res) => {
    try {
        const requestData = matchedData(req);
        
        
        const userPersonas = await Persona.findOne({
            where: { email: requestData.email }
        });
        
        const userUsuarios = await Usuario.findOne({
            where: { id_persona: userPersonas.id }
        });


        if (!userPersonas && userUsuarios) {
            handleHttpError(res, null, 'USER_NOT_EXISTS', 404);
            return;
        }       



        const hashPassword = userUsuarios.password;
        const check = await compare(requestData.password, hashPassword);

        if(!check) {
            handleHttpError(res, null, 'PASSWORD_INVALID', 401);
            return;
        }

        delete userUsuarios.dataValues.password;
        delete userUsuarios.dataValues.createdAt;
        delete userUsuarios.dataValues.updatedAt;
        const data = {
            "user": userUsuarios,
            token: await tokenSign(userUsuarios)
        }

        res.send({data})

    } catch (e) {
        handleHttpError(res, e.message, 'ERROR_LOGIN_USER');
    }
}

module.exports = { registrerControl, loginControl }