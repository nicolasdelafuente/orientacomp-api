const express = require('express');
const router = express.Router();
const { getItem, getItems, createItem, updateItem, deleteItem, restoreItem } = require("../controllers/institutos.controllers.js");

/**
 * Express router para manejar las rutas relacionadas con Institutos.
 * @module routes/institutos
 */

/**
 * Obtener todas los Institutos de la base de datos.
 * @route GET /institutos
 * @returns {Object} - Lista de Institutos.
 * @throws {Error} - Si hay un error al obtener los Institutos.
 */
router.get("/", getItems);

/**
 * Obtener un Instituto por ID.
 * @route GET /institutos/:id
 * @param {string} :id - ID del Instituto
 * @returns {Object} - El Instituto encontrada.
 * @throws {Error} - Si el Instituto no se encuentra o hay un error.
 */
router.get("/:id", getItem);

/**
 * Crear un nuevo Instituto.
 * @route POST /institutos
 * @param {Object} req.body - Datos del nuevo Instituto a crear.
 * @returns {Object} - El nueva Instituto creado.
 * @throws {Error} - Si hay un error al crear el Instituto.
 */
router.post("/", createItem);

/**
 * Actualizar un Instituto por ID.
 * @route PUT /institutos/:id
 * @param {string} :id - ID del Instituto a actualizar
 * @param {Object} req.body - Datos actualizados del Instituto
 * @returns {Object} - El Instituto actualizada.
 * @throws {Error} - Si el Instituto no se encuentra o hay un error al actualizar.
 */
router.put("/:id", updateItem);

/**
 * Eliminar un Instituto por ID.
 * @route DELETE /institutos/:id
 * @param {string} :id - ID del Instituto a eliminar
 * @returns {Object} - Mensaje de éxito si se elimina correctamente.
 * @throws {Error} - Si el Instituto no se encuentra o hay un error al eliminar.
 */
router.delete("/:id", deleteItem);

/**
 * Restaurar un Instituto eliminado por ID.
 * @route PUT /institutos/restore/:id
 * @param {string} :id - ID del Instituto a restaurar
 * @returns {Object} - Mensaje de éxito si se restaura correctamente.
 * @throws {Error} - Si el Instituto no se encuentra o hay un error al restaurar.
 */
router.put("/restore/:id", restoreItem);

module.exports = router;
