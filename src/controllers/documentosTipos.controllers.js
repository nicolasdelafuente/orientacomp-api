const { DocumentoTipo } = require("../models");

/**
 * Controlador para manejar operaciones relacionadas con DocumentoTipos.
 * @module controllers/documentosTipos
 */

/**
 * Obtener todos los Documentos Tipos de la base de datos.
 * @function getItems
 * @param {Object} req - Objeto de solicitud de Express.
 * @param {Object} res - Objeto de respuesta de Express.
 * @returns {Object} - Lista de Documentos Tipos.
 * @throws {Error} - Si hay un error al obtener los Documentos Tipos.
 */
const getItems = async (req, res) => {
    try {
        const data = await DocumentoTipo.findAll({
            where: {
                deleted: false
            },
            attributes: { exclude: ['deleted'] }
        });
        res.send({ data });
    } catch (e) {
        console.error('Error in getItems:', e);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

/**
 * Obtener un DocumentoTipo por su ID.
 * @function getItem
 * @param {Object} req - Objeto de solicitud de Express con el parámetro 'id'.
 * @param {Object} res - Objeto de respuesta de Express.
 * @returns {Object} - DocumentoTipo encontrado.
 * @throws {Error} - Si DocumentoTipono se encuentra o hay un error.
 */
const getItem = async (req, res) => {
    try {
        const { id } = req.params;
        const data = await findItemById(id, false);

        if (!data) {
            return res.status(404).json({ error: 'Record not found' });
        }

        res.send({ data });
    } catch (e) {
        console.error('Error in getItem:', e);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

/**
 * Crear un nuevo DocumentoTipo.
 * @function createItem
 * @param {Object} req - Objeto de solicitud de Express con los datos de un DocumentoTipo.
 * @param {Object} res - Objeto de respuesta de Express.
 * @returns {Object} - Nuevo un DocumentoTipo creado.
 * @throws {Error} - Si hay un error al crear el DocumentoTipo.
 */
const createItem = async (req, res) => {
    try {
        const data = await  DocumentoTipo.create(req.body);
        res.status(201).json({ success: true, data });
    } catch (e) {
        console.error('Error in createItem:', e);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

/**
 * Actualizar un DocumentoTipo existente por su ID.
 * @function updateItem
 * @param {Object} req - Objeto de solicitud de Express con el parámetro 'id' y los datos de un DocumentoTipo a actualizar.
 * @param {Object} res - Objeto de respuesta de Express.
 * @returns {Object} - DocumentoTipo actualizado.
 * @throws {Error} - Si DocumentoTipo no se encuentra o hay un error al actualizar.
 */
const updateItem = async (req, res) => {
    try {
        const { id } = req.params;
        const data = await findItemById(id, false);

        if (!data) {
            return res.status(404).json({ error: 'Record not found' });
        }

        const updatedItem = await data.update(req.body);

        res.status(200).json({ success: true, data: updatedItem });
    } catch (e) {
        console.error('Error in updateItem:', e);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

/**
 * Eliminar un DocumentoTipo por su ID (marcándolo como eliminado).
 * @function deleteItem
 * @param {Object} req - Objeto de solicitud de Express con el parámetro 'id'.
 * @param {Object} res - Objeto de respuesta de Express.
 * @returns {Object} - Mensaje de éxito si se elimina correctamente.
 * @throws {Error} - Si un DocumentoTipo no se encuentra o hay un error al eliminar.
 */
const deleteItem = async (req, res) => {
    try {
        const { id } = req.params;
        const data = await findItemById(id, false);

        if (!data) {
            return res.status(404).json({ error: 'Record not found' });
        }

        await data.update({ deleted: true });

        res.status(200).json({ success: true, message: `DocumentoTipo item deleted successfully` });
    } catch (e) {
        console.error('Error in deleteItem:', e);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

/**
 * Restaurar un DocumentoTipo previamente eliminada por su ID.
 * @function restoreItem
 * @param {Object} req - Objeto de solicitud de Express con el parámetro 'id'.
 * @param {Object} res - Objeto de respuesta de Express.
 * @returns {Object} - Mensaje de éxito si se restaura correctamente.
 * @throws {Error} - Si DocumentoTipo no se encuentra o hay un error al restaurar.
 */
const restoreItem = async (req, res) => {
    try {
        const { id } = req.params;
        const data = await findItemById(id, true);

        if (!data) {
            return res.status(404).json({ error: 'Record not found' });
        }

        await data.update({ deleted: false });

        res.status(200).json({ success: true, message: `DocumentoTipo item restored successfully` });
    } catch (e) {
        console.error('Error in restoreItem:', e);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

/**
 * Función para encontrar una Categoia por su ID.
 * @function findItemById
 * @param {Number} id - ID del DocumentoTipo a buscar.
 * @param {Boolean} deleted - Indica si un DocumentoTipo está eliminado.
 * @returns {Object} - DocumentoTipo encontrado o null si no se encuentra.
 * @throws {Error} - Si hay un error al buscar un DocumentoTipo.
 */
const findItemById = async (id, deleted) => {
    try {
        const data = await DocumentoTipo.findOne({
            where: {
                id,
                deleted
            },
            attributes: {
                exclude: ['deleted']
            }
        });

        return data;
    } catch (error) {
        console.error('Error in findItemById:', error);
        throw error;
    }
};

module.exports = { getItems, getItem, createItem, updateItem, deleteItem, restoreItem };
