const express = require('express');
const router = express.Router();
const { getItem, getItems, createItem, updateItem, deleteItem, restoreItem } = require("../controllers/categorias.controllers.js");

/**
 * Express router para manejar las rutas relacionadas con las Categorias.
 * @module routes/categorias
 */

/**
 * Obtener todas las Categorias de la base de datos.
 * @route GET /categorias
 * @returns {Object} - Lista de Categorias.
 * @throws {Error} - Si hay un error al obtener las Categorias.
 */
router.get("/", getItems);

/**
 * Obtener una Categoria por ID.
 * @route GET /categorias/:id
 * @param {string} :id - ID de la Categoria.
 * @returns {Object} - Categoria encontrada.
 * @throws {Error} - Si Categoria no se encuentra o hay un error.
 */
router.get("/:id", getItem);

/**
 * Crear una nueva Categoria.
 * @route POST /categorias
 * @param {Object} req.body - Datos de la nueva Categoria a crear.
 * @returns {Object} - Nueva Categoria creada.
 * @throws {Error} - Si hay un error al crear la Categoria.
 */
router.post("/", createItem);

/**
 * Actualizar una Categoria por ID.
 * @route PUT /categorias/:id
 * @param {string} :id - ID de la Categoria a actualizar
 * @param {Object} req.body - Datos actualizados de la Categoria
 * @returns {Object} - Categoria actualizada.
 * @throws {Error} - Si Categoria no se encuentra o hay un error al actualizar.
 */
router.put("/:id", updateItem);

/**
 * Eliminar una Categoria por ID.
 * @route DELETE /categorias/:id
 * @param {string} :id - ID de la Categoria a eliminar
 * @returns {Object} - Mensaje de éxito si se elimina correctamente.
 * @throws {Error} - Si Categoria no se encuentra o hay un error al eliminar.
 */
router.delete("/:id", deleteItem);

/**
 * Restaurar una Categoria eliminada por ID.
 * @route PUT /categorias/restore/:id
 * @param {string} :id - ID de la Categoria a restaurar
 * @returns {Object} - Mensaje de éxito si se restaura correctamente.
 * @throws {Error} - Si Categoria no se encuentra o hay un error al restaurar.
 */
router.put("/restore/:id", restoreItem);

module.exports = router;
