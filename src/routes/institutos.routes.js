const express = require('express');
const router = express.Router();
const { getItem, getItems, createItem, updateItem, deleteItem, restoreItem } = require("../controllers/institutos.controllers.js");

/**
 * Express router para manejar las rutas relacionadas con Institutos.
 * @module routes/institutos
 */

/**
 * Obtener todas las Institutos de la base de datos.
 * @route GET /institutos
 * @returns {Object} - Lista de Institutos.
 * @throws {Error} - Si hay un error al obtener las Institutos.
 */
router.get("/", getItems);

/**
 * Obtener una Instituto por ID.
 * @route GET /institutos/:id
 * @param {string} :id - ID de la Instituto
 * @returns {Object} - La Instituto encontrada.
 * @throws {Error} - Si la Instituto no se encuentra o hay un error.
 */
router.get("/:id", getItem);

/**
 * Crear una nueva Instituto.
 * @route POST /institutos
 * @param {Object} req.body - Datos de la nueva Instituto a crear.
 * @returns {Object} - La nueva Instituto creada.
 * @throws {Error} - Si hay un error al crear la Instituto.
 */
router.post("/", createItem);

/**
 * Actualizar una Instituto por ID.
 * @route PUT /institutos/:id
 * @param {string} :id - ID de la Instituto a actualizar
 * @param {Object} req.body - Datos actualizados de la Instituto
 * @returns {Object} - La Instituto actualizada.
 * @throws {Error} - Si la Instituto no se encuentra o hay un error al actualizar.
 */
router.put("/:id", updateItem);

/**
 * Eliminar una Instituto por ID.
 * @route DELETE /institutos/:id
 * @param {string} :id - ID de la Instituto a eliminar
 * @returns {Object} - Mensaje de éxito si se elimina correctamente.
 * @throws {Error} - Si la Instituto no se encuentra o hay un error al eliminar.
 */
router.delete("/:id", deleteItem);

/**
 * Restaurar una Instituto eliminada por ID.
 * @route PUT /institutos/restore/:id
 * @param {string} :id - ID de la Instituto a restaurar
 * @returns {Object} - Mensaje de éxito si se restaura correctamente.
 * @throws {Error} - Si la Instituto no se encuentra o hay un error al restaurar.
 */
router.put("/restore/:id", restoreItem);

module.exports = router;
