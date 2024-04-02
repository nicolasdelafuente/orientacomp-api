const express = require('express');
const router = express.Router();
const { getItem, getItems, createItem, updateItem, deleteItem, restoreItem } = require("../controllers/genero.controllers.js");

/**
 * Express router para manejar las rutas relacionadas con Genero.
 * @module routes/genero
 */

/**
 * Obtener todos los Generos de la base de datos.
 * @route GET /genero
 * @returns {Object} - Lista de Genero.
 * @throws {Error} - Si hay un error al obtener los Generos.
 */
router.get("/", getItems);

/**
 * Obtener un Genero por ID.
 * @route GET /genero/:id
 * @param {string} :id - ID del Genero
 * @returns {Object} - Genero encontrada.
 * @throws {Error} - Si el Genero no se encuentra o hay un error.
 */
router.get("/:id", getItem);

/**
 * Crear un nuevo Genero.
 * @route POST /genero
 * @param {Object} req.body - Datos de un nuevo Genero a crear.
 * @returns {Object} - Nuevo Genero creada.
 * @throws {Error} - Si hay un error al crear el Genero.
 */
router.post("/", createItem);

/**
 * Actualizar una Role por ID.
 * @route PUT /genero/:id
 * @param {string} :id - ID del Genero a actualizar
 * @param {Object} req.body - Datos actualizados del Genero
 * @returns {Object} - Genero actualizada.
 * @throws {Error} - Si el Genero no se encuentra o hay un error al actualizar.
 */
router.put("/:id", updateItem);

/**
 * Eliminar un Genero por ID.
 * @route DELETE /genero/:id
 * @param {string} :id - ID del Genero a eliminar
 * @returns {Object} - Mensaje de éxito si se elimina correctamente.
 * @throws {Error} - Si el Genero no se encuentra o hay un error al eliminar.
 */
router.delete("/:id", deleteItem);

/**
 * Restaurar un genero eliminada por ID.
 * @route PUT /genero/restore/:id
 * @param {string} :id - ID del Genero a restaurar
 * @returns {Object} - Mensaje de éxito si se restaura correctamente.
 * @throws {Error} - Si el Genero no se encuentra o hay un error al restaurar.
 */
router.put("/restore/:id", restoreItem);

module.exports = router;
