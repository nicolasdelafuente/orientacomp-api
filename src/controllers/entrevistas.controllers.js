const { Entrevista } = require("../models");

/**
 * Controlador para manejar operaciones relacionadas con Entrevistas.
 * @module controllers/entrevistas
 */

/**
 * Obtener todas las Entrevistas de la base de datos.
 * @function getItems
 * @param {Object} req - Objeto de solicitud de Express.
 * @param {Object} res - Objeto de respuesta de Express.
 * @returns {Object} - Lista de Entrevistas.
 * @throws {Error} - Si hay un error al obtener las Entrevistas.
 */
const getItems = async (req, res) => {
    try {
        const data = await Entrevista.findAll({
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
 * Obtener una Entrevista por su ID.
 * @function getItem
 * @param {Object} req - Objeto de solicitud de Express con el parámetro 'id'.
 * @param {Object} res - Objeto de respuesta de Express.
 * @returns {Object} - La Entrevista fue encontrada.
 * @throws {Error} - Si la Entrevista no se encuentra o hay un error.
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
 * Crear una nueva Entrevista.
 * @function createItem
 * @param {Object} req - Objeto de solicitud de Express con los datos de la Entrevista.
 * @param {Object} res - Objeto de respuesta de Express.
 * @returns {Object} - La nueva Entrevista creada.
 * @throws {Error} - Si hay un error al crear la Entrevista.
 */
const createItem = async (req, res) => {
    try {
        const data = await Entrevista.create(req.body);
        res.status(201).json({ success: true, data });
    } catch (e) {
        console.error('Error in createItem:', e);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

/**
 * Actualizar una Entrevista existente por su ID.
 * @function updateItem
 * @param {Object} req - Objeto de solicitud de Express con el parámetro 'id' y los datos de la Entrevista a actualizar.
 * @param {Object} res - Objeto de respuesta de Express.
 * @returns {Object} - La Entrevista actualizada.
 * @throws {Error} - Si la Entrevista no se encuentra o hay un error al actualizar.
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
 * Eliminar una Entrevista por su ID (marcándola como eliminada).
 * @function deleteItem
 * @param {Object} req - Objeto de solicitud de Express con el parámetro 'id'.
 * @param {Object} res - Objeto de respuesta de Express.
 * @returns {Object} - Mensaje de éxito si se elimina correctamente.
 * @throws {Error} - Si la Entrevista no se encuentra o hay un error al eliminar.
 */
const deleteItem = async (req, res) => {
    try {
        const { id } = req.params;
        const data = await findItemById(id, false);

        if (!data) {
            return res.status(404).json({ error: 'Record not found' });
        }

        await data.update({ deleted: true });

        res.status(200).json({ success: true, message: `Entrevista item deleted successfully` });
    } catch (e) {
        console.error('Error in deleteItem:', e);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

/**
 * Restaurar una Entrevista previamente eliminada por su ID.
 * @function restoreItem
 * @param {Object} req - Objeto de solicitud de Express con el parámetro 'id'.
 * @param {Object} res - Objeto de respuesta de Express.
 * @returns {Object} - Mensaje de éxito si se restaura correctamente.
 * @throws {Error} - Si la Entrevista no se encuentra o hay un error al restaurar.
 */
const restoreItem = async (req, res) => {
    try {
        const { id } = req.params;
        const data = await findItemById(id, true);

        if (!data) {
            return res.status(404).json({ error: 'Record not found' });
        }

        await data.update({ deleted: false });

        res.status(200).json({ success: true, message: `Entrevista item restored successfully` });
    } catch (e) {
        console.error('Error in restoreItem:', e);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

/**
 * Función para encontrar una Entrevista por su ID.
 * @function findItemById
 * @param {Number} id - ID de la Entrevista a buscar.
 * @param {Boolean} deleted - Indica si la Entrevista está eliminada.
 * @returns {Object} - La Entrevista encontrada o null si no se encuentra.
 * @throws {Error} - Si hay un error al buscar la Entrevista.
 */
const findItemById = async (id, deleted) => {
    try {
        const data = await Entrevista.findOne({
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
