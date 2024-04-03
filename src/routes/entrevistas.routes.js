const express = require('express');
const router = express.Router();
const { getItem, getItems, createItem, updateItem, deleteItem, restoreItem } = require("../controllers/entrevistas.controllers.js");

/**
 * Express router para manejar las rutas relacionadas con las Entrevistas.
 * @module routes/entrevistas
 */

/**
 * Obtener todas las Entrevistas de la base de datos.
 * @route GET /entrevistas
 * @returns {Object} - Lista de Entrevista.
 * @throws {Error} - Si hay un error al obtener las Entrevista.
 */
router.get("/", getItems);

/**
 * Obtener una Entrevista por ID.
 * @route GET /entrevistas/:id
 * @param {string} :id - ID de la Entrevista
 * @returns {Object} - La Entrevista encontrada.
 * @throws {Error} - Si la Entrevista no se encuentra o hay un error.
 */
router.get("/:id", getItem);

/**
 * Crear una nueva Entrevista.
 * @route POST /entrevistas
 * @param {Object} req.body - Datos de la nueva Entrevista a crear.
 * @returns {Object} - La nueva Entrevista creada.
 * @throws {Error} - Si hay un error al crear la Entrevista.
 */
router.post("/", createItem);

/**
 * Actualizar una Entrevista por ID.
 * @route PUT /entrevistas/:id
 * @param {string} :id - ID de la Entrevista a actualizar
 * @param {Object} req.body - Datos actualizados de la Entrevista.
 * @returns {Object} - La Entrevista actualizada.
 * @throws {Error} - Si la Entrevista no se encuentra o hay un error al actualizar.
 */
router.put("/:id", updateItem);

/**
 * Eliminar una Entrevista por ID.
 * @route DELETE /entrevistas/:id
 * @param {string} :id - ID de la Entrevista a eliminar
 * @returns {Object} - Mensaje de éxito si se elimina correctamente.
 * @throws {Error} - Si la Entrevista no se encuentra o hay un error al eliminar.
 */
router.delete("/:id", deleteItem);

/**
 * Restaurar una Entrevista eliminada por ID.
 * @route PUT /entrevistas/restore/:id
 * @param {string} :id - ID de la Entrevista a restaurar
 * @returns {Object} - Mensaje de éxito si se restaura correctamente.
 * @throws {Error} - Si la Entrevista no se encuentra o hay un error al restaurar.
 */
router.put("/restore/:id", restoreItem);

module.exports = router;
