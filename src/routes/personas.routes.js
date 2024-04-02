const express = require('express');
const router = express.Router();
const { validatorCreateItem, validatorGetItem } = require("../validators/personas.js");
const { getItem, getItems, createItem, updateItem, deleteItem, restoreItem } = require("../controllers/personas.controllers.js");

/**
 * Express router para manejar las rutas relacionadas con Personas.
 * @module routes/personas
 */

/**
 * Obtener todas las Personas de la base de datos.
 * @route GET /personas
 * @returns {Object} - Lista de Personas.
 * @throws {Error} - Si hay un error al obtener las Personas.
 */
router.get("/", getItems);

/**
 * Obtener una Carrera por ID.
 * @route GET /personas/:id
 * @param {string} :id - ID de la Carrera
 * @returns {Object} - La Carrera encontrada.
 * @throws {Error} - Si la Carrera no se encuentra o hay un error.
 */
router.get("/:id", validatorGetItem, getItem);

/**
 * Crear una nueva Carrera.
 * @route POST /personas
 * @param {Object} req.body - Datos de la nueva Carrera a crear.
 * @returns {Object} - La nueva Carrera creada.
 * @throws {Error} - Si hay un error al crear la Carrera.
 */
router.post("/", validatorCreateItem, createItem);

/**
 * Actualizar una Carrera por ID.
 * @route PUT /personas/:id
 * @param {string} :id - ID de la Carrera a actualizar
 * @param {Object} req.body - Datos actualizados de la Carrera
 * @returns {Object} - La Carrera actualizada.
 * @throws {Error} - Si la Carrera no se encuentra o hay un error al actualizar.
 */
router.put("/:id", validatorGetItem, validatorCreateItem, updateItem);

/**
 * Eliminar una Carrera por ID.
 * @route DELETE /personas/:id
 * @param {string} :id - ID de la Carrera a eliminar
 * @returns {Object} - Mensaje de éxito si se elimina correctamente.
 * @throws {Error} - Si la Carrera no se encuentra o hay un error al eliminar.
 */
router.delete("/:id", validatorGetItem, deleteItem);

/**
 * Restaurar una Carrera eliminada por ID.
 * @route PUT /personas/restore/:id
 * @param {string} :id - ID de la Carrera a restaurar
 * @returns {Object} - Mensaje de éxito si se restaura correctamente.
 * @throws {Error} - Si la Carrera no se encuentra o hay un error al restaurar.
 */
router.put("/restore/:id", validatorGetItem, restoreItem);

module.exports = router;
