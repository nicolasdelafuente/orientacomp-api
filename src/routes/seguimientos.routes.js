const express = require('express');
const router = express.Router();
const { getItem, getItems, createItem, updateItem, deleteItem, restoreItem } = require("../controllers/seguimientos.controllers.js");

/**
 * Express router para manejar las rutas relacionadas con Seguimientos.
 * @module routes/seguimientos
 */

/**
 * Obtener todas los Seguimientos de la base de datos.
 * @route GET /seguimientos
 * @returns {Object} - Lista de Seguimientos.
 * @throws {Error} - Si hay un error al obtener los Seguimientos.
 */
router.get("/", getItems);

/**
 * Obtener un Seguimiento por ID.
 * @route GET /seguimientos/:id
 * @param {string} :id - ID del Seguimiento
 * @returns {Object} - El Seguimiento encontrada.
 * @throws {Error} - Si el Seguimiento no se encuentra o hay un error.
 */
router.get("/:id", getItem);

/**
 * Crear un nuevo Seguimiento.
 * @route POST /seguimientos
 * @param {Object} req.body - Datos del nuevo Seguimiento a crear.
 * @returns {Object} - El nuevo Seguimiento creada.
 * @throws {Error} - Si hay un error al crear el Seguimiento.
 */
router.post("/", createItem);

/**
 * Actualizar un Seguimiento por ID.
 * @route PUT /seguimientos/:id
 * @param {string} :id - ID del Seguimiento a actualizar
 * @param {Object} req.body - Datos actualizados del Seguimiento
 * @returns {Object} - El Seguimiento actualizada.
 * @throws {Error} - Si el Seguimiento no se encuentra o hay un error al actualizar.
 */
router.put("/:id", updateItem);

/**
 * Eliminar un Seguimiento por ID.
 * @route DELETE /seguimientos/:id
 * @param {string} :id - ID del Seguimiento a eliminar
 * @returns {Object} - Mensaje de éxito si se elimina correctamente.
 * @throws {Error} - Si el Seguimiento no se encuentra o hay un error al eliminar.
 */
router.delete("/:id", deleteItem);

/**
 * Restaurar una Seguimiento eliminada por ID.
 * @route PUT /seguimientos/restore/:id
 * @param {string} :id - ID del Seguimiento a restaurar
 * @returns {Object} - Mensaje de éxito si se restaura correctamente.
 * @throws {Error} - Si el Seguimiento no se encuentra o hay un error al restaurar.
 */
router.put("/restore/:id", restoreItem);

module.exports = router;
