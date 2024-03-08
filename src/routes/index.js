

const express = require('express');
const router = express.Router();
const fs = require("fs");

/** 
 * Módulo principal para manejar las rutas de la aplicación.
 * @module routes/index
 */

/**
 * Ruta del directorio donde se encuentran las rutas.
 * @constant {string}
 */
const PATH_ROUTES = __dirname;

/**
 * Función para eliminar la extensión de un nombre de archivo.
 * @param {string} fileName - Nombre del archivo.
 * @returns {string} Nombre del archivo sin extensión.
 */
const removeExtension = (fileName) => {
    return fileName.split('.').shift();
}

/**
 * Lee los archivos en el directorio de rutas, y para cada archivo, si no es 'index.js', lo agrega como una ruta.
 * @param {string} file - Nombre del archivo en el directorio de rutas.
 */
fs.readdirSync(PATH_ROUTES).filter((file) => {
    const name = removeExtension(file);
    const skip = name !== 'index';

    if (skip) {
        // Agrega la ruta utilizando el nombre del archivo sin extensión
        router.use(`/${name}`, require(`./${file}`));
    }
});


module.exports = router;
