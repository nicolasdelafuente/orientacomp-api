const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET

/**
 * Genera un token de sesión JWT a partir del objeto de usuario proporcionado.
 * @param {Object} user - El objeto de usuario del cual se extraen datos para el token.
 * @returns {string} - El token de sesión JWT generado.
 */
const tokenSign = async (user) => {
    const sign = jwt.sign(
        {
            id: user.id_usuario,
            role: user.id_rol 
        },
        JWT_SECRET,
        {
            expiresIn: "2h"
        }     
    );

    return sign;
}


/**
 * Verifica la validez de un token de sesión JWT.
 * @param {string} tokenJwt - El token de sesión JWT que se va a verificar.
 * @returns {Object|null} - Si el token es válido, devuelve el objeto descifrado del token.
 *                        Si el token no es válido o ha expirado, devuelve null.
 */
const verifyToken = async(tokenJwt) => {
    try {
        return jwt.verify(tokenJwt, JWT_SECRET);
    } catch (e) {
        return e;
    }
}

module.exports = { tokenSign, verifyToken }