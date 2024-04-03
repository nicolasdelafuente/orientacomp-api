const express = require('express');
const router = express.Router();
const { getItem, getItems, createItem, updateItem, deleteItem, restoreItem } = require("../controllers/localidades.controllers.js");

/**
 * Express router para manejar las rutas relacionadas con Localidades.
 * @module routes/localidades
 */

/**
 * Obtener todas las Localidades de la base de datos.
 * @route GET /localidades
 * @returns {Object} - Lista de Localidades.
 * @throws {Error} - Si hay un error al obtener las Localidades.
 */
router.get("/", getItems);

/**
 * Obtener una Localidad por ID.
 * @route GET /localidades/:id
 * @param {string} :id - ID de la Localidad
 * @returns {Object} - La Localidad encontrada.
 * @throws {Error} - Si la Localidad no se encuentra o hay un error.
 */
router.get("/:id", getItem);

/**
 * Crear una nueva Localidad.
 * @route POST /localidades
 * @param {Object} req.body - Datos de la nueva Localidad a crear.
 * @returns {Object} - La nueva Localidad creada.
 * @throws {Error} - Si hay un error al crear la Localidad.
 */
router.post("/", createItem);

/**
 * Actualizar una Localidad por ID.
 * @route PUT /localidades/:id
 * @param {string} :id - ID de la Localidad a actualizar
 * @param {Object} req.body - Datos actualizados de la Localidad
 * @returns {Object} - La Localidad actualizada.
 * @throws {Error} - Si la Localidad no se encuentra o hay un error al actualizar.
 */
router.put("/:id", updateItem);

/**
 * Eliminar una Localidad por ID.
 * @route DELETE /localidades/:id
 * @param {string} :id - ID de la Localidad a eliminar
 * @returns {Object} - Mensaje de éxito si se elimina correctamente.
 * @throws {Error} - Si la Localidad no se encuentra o hay un error al eliminar.
 */
router.delete("/:id", deleteItem);

/**
 * Restaurar una Localidad eliminada por ID.
 * @route PUT /localidades/restore/:id
 * @param {string} :id - ID de la Localidad a restaurar
 * @returns {Object} - Mensaje de éxito si se restaura correctamente.
 * @throws {Error} - Si la Localidad no se encuentra o hay un error al restaurar.
 */
router.put("/restore/:id", restoreItem);

module.exports = router;
