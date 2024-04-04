const express = require('express');
const router = express.Router();
const { getItem, getItems, createItem, updateItem, deleteItem, restoreItem } = require("../controllers/usuarios.controllers.js");

/**
 * Express router para manejar las rutas relacionadas con Usuario.
 * @module routes/usuarios
 */

/**
 * Obtener todos los Usuarios de la base de datos.
 * @route GET /usuarios
 * @returns {Object} - Lista de Usuarios.
 * @throws {Error} - Si hay un error al obtener los Usuarios.
 */
router.get("/", getItems);

/**
 * Obtener un Usuario por ID.
 * @route GET /usuarios/:id
 * @param {string} :id - ID del Usuario
 * @returns {Object} - Usuario encontrado.
 * @throws {Error} - Si Usuario no se encuentra o hay un error.
 */
router.get("/:id", getItem);

/**
 * Crear un nuevo Usuario.
 * @route POST /usuarios
 * @param {Object} req.body - Datos del nuevo Usuario a crear.
 * @returns {Object} - Nuevo Usuario creado.
 * @throws {Error} - Si hay un error al crear Usuario.
 */
router.post("/", createItem);

/**
 * Actualizar un Usuario por ID.
 * @route PUT /usuarios/:id
 * @param {string} :id - ID del Usuario a actualizar
 * @param {Object} req.body - Datos actualizados del Usuario
 * @returns {Object} - Usuario actualizado.
 * @throws {Error} - Si el Usuario no se encuentra o hay un error al actualizar.
 */
router.put("/:id", updateItem);

/**
 * Eliminar un Usuario por ID.
 * @route DELETE /usuarios/:id
 * @param {string} :id - ID del Usuario a eliminar
 * @returns {Object} - Mensaje de éxito si se elimina correctamente.
 * @throws {Error} - Si Usuario no se encuentra o hay un error al eliminar.
 */
router.delete("/:id", deleteItem);

/**
 * Restaurar un Usuario eliminada por ID.
 * @route PUT /usuarios/restore/:id
 * @param {string} :id - ID del Usuario a restaurar
 * @returns {Object} - Mensaje de éxito si se restaura correctamente.
 * @throws {Error} - Si Usuario no se encuentra o hay un error al restaurar.
 */
router.put("/restore/:id", restoreItem);

module.exports = router;
