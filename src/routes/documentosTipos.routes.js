const express = require('express');
const router = express.Router();
const { getItem, getItems, createItem, updateItem, deleteItem, restoreItem } = require("../controllers/documentosTipos.controllers.js");

/**
 * Express router para manejar las rutas relacionadas con los DocumentosTipos.
 * @module routes/documentosTipos
 */

/**
 * Obtener todos los DocumentosTipos de la base de datos.
 * @route GET /documentosTipos
 * @returns {Object} - Lista de los DocumentosTipos.
 * @throws {Error} - Si hay un error al obtener los DocumentosTipos.
 */
router.get("/", getItems);

/**
 * Obtener un DocumentosTipos por ID.
 * @route GET /documentosTipos/:id
 * @param {string} :id - ID del DocumentoTipo.
 * @returns {Object} - DocumentoTipo encontrado.
 * @throws {Error} - Si DocuemntoTipo no se encuentra o hay un error.
 */
router.get("/:id", getItem);

/**
 * Crear un nuevo DocumentoTipo.
 * @route POST /documentosTipos
 * @param {Object} req.body - Datos del nuevo DocumentoTipo a crear.
 * @returns {Object} - Nuevo DocuemntoTipo creado.
 * @throws {Error} - Si hay un error al crear el DocumentoTipo.
 */
router.post("/", createItem);

/**
 * Actualizar un DocumentoTipo por ID.
 * @route PUT /documentosTipos/:id
 * @param {string} :id - ID del DocumentoTipos a actualizar
 * @param {Object} req.body - Datos actualizados del los DocumentosTipos
 * @returns {Object} - DocumentoTipo actualizado.
 * @throws {Error} - Si DocumentoTipo no se encuentra o hay un error al actualizar.
 */
router.put("/:id", updateItem);

/**
 * Eliminar un DocumentoTipo por ID.
 * @route DELETE /documentosTipos/:id
 * @param {string} :id - ID del DocumentoTipo a eliminar
 * @returns {Object} - Mensaje de éxito si se elimina correctamente.
 * @throws {Error} - Si DocumentoTipo no se encuentra o hay un error al eliminar.
 */
router.delete("/:id", deleteItem);

/**
 * Restaurar un DocumentoTipo eliminado por ID.
 * @route PUT /documentosTipos/restore/:id
 * @param {string} :id - ID del DocumentoTipo a restaurar
 * @returns {Object} - Mensaje de éxito si se restaura correctamente.
 * @throws {Error} - Si DocumentoTipo no se encuentra o hay un error al restaurar.
 */
router.put("/restore/:id", restoreItem);

module.exports = router;
