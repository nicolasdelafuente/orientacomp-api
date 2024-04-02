const express = require('express');
const router = express.Router();
const { getItem, getItems, createItem, updateItem, deleteItem, restoreItem } = require("../controllers/seguimientosTipos.controllers.js");

/**
 * Express router para manejar las rutas relacionadas con SeguimientosTipos.
 * @module routes/seguimientostipos
 */

/**
 * Obtener todas los SeguimientosTipos de la base de datos.
 * @route GET /seguimientostipos
 * @returns {Object} - Lista de SeguimientosTipos.
 * @throws {Error} - Si hay un error al obtener los SeguimientosTipos.
 */
router.get("/", getItems);

/**
 * Obtener un SeguimientoTipo por ID.
 * @route GET /seguimientostipos/:id
 * @param {string} :id - ID del SeguimientoTipo
 * @returns {Object} - El SeguimientoTipo encontrada.
 * @throws {Error} - Si el SeguimientoTipo no se encuentra o hay un error.
 */
router.get("/:id", getItem);

/**
 * Crear un nuevo SeguimientoTipo.
 * @route POST /seguimientostipos
 * @param {Object} req.body - Datos del nuevo SeguimientoTipo a crear.
 * @returns {Object} - El nuevo SeguimientoTipo creada.
 * @throws {Error} - Si hay un error al crear el SeguimientoTipo.
 */
router.post("/", createItem);

/**
 * Actualizar un SeguimientoTipo por ID.
 * @route PUT /seguimientostipos/:id
 * @param {string} :id - ID del SeguimientoTipo a actualizar
 * @param {Object} req.body - Datos actualizados del SeguimientoTipo
 * @returns {Object} - El SeguimientoTipo actualizada.
 * @throws {Error} - Si el SeguimientoTipo no se encuentra o hay un error al actualizar.
 */
router.put("/:id", updateItem);

/**
 * Eliminar un SeguimientoTipo por ID.
 * @route DELETE /seguimientostipos/:id
 * @param {string} :id - ID del SeguimientoTipo a eliminar
 * @returns {Object} - Mensaje de éxito si se elimina correctamente.
 * @throws {Error} - Si el SeguimientoTipo no se encuentra o hay un error al eliminar.
 */
router.delete("/:id", deleteItem);

/**
 * Restaurar una SeguimientoTipo eliminada por ID.
 * @route PUT /seguimientostipos/restore/:id
 * @param {string} :id - ID del SeguimientoTipo a restaurar
 * @returns {Object} - Mensaje de éxito si se restaura correctamente.
 * @throws {Error} - Si el SeguimientoTipo no se encuentra o hay un error al restaurar.
 */
router.put("/restore/:id", restoreItem);

module.exports = router;
