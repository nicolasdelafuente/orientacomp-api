const express = require('express');
const router = express.Router();
const { getItem, getItems, createItem, updateItem, deleteItem, restoreItem } = require("../controllers/estados.controllers.js");

/**
 * Express router para manejar las rutas relacionadas con los Estados.
 * @module routes/estados
 */

/**
 * Obtener todos los Estados de la base de datos.
 * @route GET /estados
 * @returns {Object} - Lista de Estados.
 * @throws {Error} - Si hay un error al obtener los Estados.
 */
router.get("/", getItems);

/**
 * Obtener un Estado por ID.
 * @route GET /estados/:id
 * @param {string} :id - ID del Estado.
 * @returns {Object} - Estado encontrado.
 * @throws {Error} - Si Estado no se encuentra o hay un error.
 */
router.get("/:id", getItem);

/**
 * Crear un nuevo Estado.
 * @route POST /estados
 * @param {Object} req.body - Datos del nuevo Estado a crear.
 * @returns {Object} - Nuevo Estado creado.
 * @throws {Error} - Si hay un error al crear el Estado.
 */
router.post("/", createItem);

/**
 * Actualizar un Estado por ID.
 * @route PUT /estados/:id
 * @param {string} :id - ID del Estado a actualizar
 * @param {Object} req.body - Datos actualizados del Estado
 * @returns {Object} - Estado actualizado.
 * @throws {Error} - Si Estado no se encuentra o hay un error al actualizar.
 */
router.put("/:id", updateItem);

/**
 * Eliminar un Estado por ID.
 * @route DELETE /estados/:id
 * @param {string} :id - ID del Estado a eliminar
 * @returns {Object} - Mensaje de éxito si se elimina correctamente.
 * @throws {Error} - Si Estado no se encuentra o hay un error al eliminar.
 */
router.delete("/:id", deleteItem);

/**
 * Restaurar un Estado eliminado por ID.
 * @route PUT /estados/restore/:id
 * @param {string} :id - ID del Estado a restaurar
 * @returns {Object} - Mensaje de éxito si se restaura correctamente.
 * @throws {Error} - Si Estado no se encuentra o hay un error al restaurar.
 */
router.put("/restore/:id", restoreItem);

module.exports = router;
