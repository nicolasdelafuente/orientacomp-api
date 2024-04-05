const express = require('express');
const router = express.Router();
const { getItem, getItems, createItem, updateItem, deleteItem, restoreItem } = require("../controllers/generos.controllers.js");

/**
 * Express router para manejar las rutas relacionadas con Generos.
 * @module routes/generos
 */

/**
 * Obtener todo los Generos de la base de datos.
 * @route GET /generos
 * @returns {Object} - Lista de Generos.
 * @throws {Error} - Si hay un error al obtener los Generos.
 */
router.get("/", getItems);

/**
 * Obtener un Genero por ID.
 * @route GET /generos/:id
 * @param {string} :id - ID del Genero
 * @returns {Object} - El Genero encontrada.
 * @throws {Error} - Si el Genero no se encuentra o hay un error.
 */
router.get("/:id", getItem);

/**
 * Crear un nuevo Genero.
 * @route POST /generos
 * @param {Object} req.body - Datos del Genero a crear.
 * @returns {Object} - el nuevo Genero creada.
 * @throws {Error} - Si hay un error al crear el Genero.
 */
router.post("/", createItem);

/**
 * Actualizar un Genero por ID.
 * @route PUT /generos/:id
 * @param {string} :id - ID del Genero a actualizar
 * @param {Object} req.body - Datos actualizados del Genero
 * @returns {Object} - El Genero actualizada.
 * @throws {Error} - Si el Genero no se encuentra o hay un error al actualizar.
 */
router.put("/:id", updateItem);

/**
 * Eliminar un Genero por ID.
 * @route DELETE /generos/:id
 * @param {string} :id - ID del Genero a eliminar
 * @returns {Object} - Mensaje de éxito si se elimina correctamente.
 * @throws {Error} - Si el Genero no se encuentra o hay un error al eliminar.
 */
router.delete("/:id", deleteItem);

/**
 * Restaurar un Genero eliminada por ID.
 * @route PUT /generos/restore/:id
 * @param {string} :id - ID del Genero a restaurar
 * @returns {Object} - Mensaje de éxito si se restaura correctamente.
 * @throws {Error} - Si el Genero no se encuentra o hay un error al restaurar.
 */
router.put("/restore/:id", restoreItem);

module.exports = router;
