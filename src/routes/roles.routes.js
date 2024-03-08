const express = require('express');
const router = express.Router();
const { getItem, getItems, createItem, updateItem, deleteItem, restoreItem } = require("../controllers/roles.controllers.js");

/**
 * Express router para manejar las rutas relacionadas con Roles.
 * @module routes/roles
 */

/**
 * Obtener todas las Roles de la base de datos.
 * @route GET /roles
 * @returns {Object} - Lista de Roles.
 * @throws {Error} - Si hay un error al obtener las Roles.
 */
router.get("/", getItems);

/**
 * Obtener una Role por ID.
 * @route GET /roles/:id
 * @param {string} :id - ID de la Role
 * @returns {Object} - La Role encontrada.
 * @throws {Error} - Si la Role no se encuentra o hay un error.
 */
router.get("/:id", getItem);

/**
 * Crear una nueva Role.
 * @route POST /roles
 * @param {Object} req.body - Datos de la nueva Role a crear.
 * @returns {Object} - La nueva Role creada.
 * @throws {Error} - Si hay un error al crear la Role.
 */
router.post("/", createItem);

/**
 * Actualizar una Role por ID.
 * @route PUT /roles/:id
 * @param {string} :id - ID de la Role a actualizar
 * @param {Object} req.body - Datos actualizados de la Role
 * @returns {Object} - La Role actualizada.
 * @throws {Error} - Si la Role no se encuentra o hay un error al actualizar.
 */
router.put("/:id", updateItem);

/**
 * Eliminar una Role por ID.
 * @route DELETE /roles/:id
 * @param {string} :id - ID de la Role a eliminar
 * @returns {Object} - Mensaje de éxito si se elimina correctamente.
 * @throws {Error} - Si la Role no se encuentra o hay un error al eliminar.
 */
router.delete("/:id", deleteItem);

/**
 * Restaurar una Role eliminada por ID.
 * @route PUT /roles/restore/:id
 * @param {string} :id - ID de la Role a restaurar
 * @returns {Object} - Mensaje de éxito si se restaura correctamente.
 * @throws {Error} - Si la Role no se encuentra o hay un error al restaurar.
 */
router.put("/restore/:id", restoreItem);

module.exports = router;
