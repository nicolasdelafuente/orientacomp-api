const express = require('express');
const router = express.Router();
const { getItem, getItems, createItem, updateItem, deleteItem, restoreItem } = require("../controllers/paises.controllers.js");

/**
 * Express router para manejar las rutas relacionadas con Paises.
 * @module routes/paises
 */

/**
 * Obtener todas los Paises de la base de datos.
 * @route GET /paises
 * @returns {Object} - Lista de Paises.
 * @throws {Error} - Si hay un error al obtener los Paises.
 */
router.get("/", getItems);

/**
 * Obtener un Pais por ID.
 * @route GET /paises/:id
 * @param {string} :id - ID del Pais
 * @returns {Object} - El Pais encontrada.
 * @throws {Error} - Si el Pais no se encuentra o hay un error.
 */
router.get("/:id", getItem);

/**
 * Crear un nuevo Pais.
 * @route POST /paises
 * @param {Object} req.body - Datos del nuevo Pais a crear.
 * @returns {Object} - El nuevo Pais creada.
 * @throws {Error} - Si hay un error al crear el Pais.
 */
router.post("/", createItem);

/**
 * Actualizar un Pais por ID.
 * @route PUT /paises/:id
 * @param {string} :id - ID del Pais a actualizar
 * @param {Object} req.body - Datos actualizados del Pais
 * @returns {Object} - El Pais actualizada.
 * @throws {Error} - Si el Pais no se encuentra o hay un error al actualizar.
 */
router.put("/:id", updateItem);

/**
 * Eliminar un Pais por ID.
 * @route DELETE /paises/:id
 * @param {string} :id - ID del Pais a eliminar
 * @returns {Object} - Mensaje de éxito si se elimina correctamente.
 * @throws {Error} - Si el Pais no se encuentra o hay un error al eliminar.
 */
router.delete("/:id", deleteItem);

/**
 * Restaurar una Pais eliminada por ID.
 * @route PUT /paises/restore/:id
 * @param {string} :id - ID del Pais a restaurar
 * @returns {Object} - Mensaje de éxito si se restaura correctamente.
 * @throws {Error} - Si el Pais no se encuentra o hay un error al restaurar.
 */
router.put("/restore/:id", restoreItem);

module.exports = router;
