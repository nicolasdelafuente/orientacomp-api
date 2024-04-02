const bcryptjs = require('bcryptjs');

/**
 * Encripta una contraseña sin encriptar utilizando el algoritmo bcrypt.
 * @param {string} passwordPlain - Contraseña sin encriptar.
 * @returns {Promise<string>} - Contraseña encriptada.
 */
const encrypt = async (passwordPlain) => {
    const hash = await bcryptjs.hash(passwordPlain, 2);
    return hash;
}

/**
 * Compara una contraseña sin encriptar con una contraseña encriptada para verificar su coincidencia.
 * @param {string} passwordPlain - Contraseña sin encriptar.
 * @param {string} hashPassword - Contraseña encriptada.
 * @returns {Promise<boolean>} - Devuelve true si las contraseñas coinciden, de lo contrario, false.
 */
const compare = async (passwordPlain, hashPassword) => {
    return await bcryptjs.compare(passwordPlain, hashPassword);
}

module.exports = { encrypt, compare };
