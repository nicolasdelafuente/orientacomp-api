const { Localidad } = require("../models");

/**
 * Controlador para manejar operaciones relacionadas con Localidades.
 * @module controllers/localidades
 */

/**
 * Obtener todas las Localidades de la base de datos.
 * @function getItems
 * @param {Object} req - Objeto de solicitud de Express.
 * @param {Object} res - Objeto de respuesta de Express.
 * @returns {Object} - Lista de Localidades.
 * @throws {Error} - Si hay un error al obtener las Localidades.
 */
const getItems = async (req, res) => {
    try {
        const data = await Localidad.findAll({
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
 * Obtener una Localidad por su ID.
 * @function getItem
 * @param {Object} req - Objeto de solicitud de Express con el parámetro 'id'.
 * @param {Object} res - Objeto de respuesta de Express.
 * @returns {Object} - La Localidad encontrada.
 * @throws {Error} - Si la Localidad no se encuentra o hay un error.
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
 * Crear una nueva Localidad.
 * @function createItem
 * @param {Object} req - Objeto de solicitud de Express con los datos de la Localidad.
 * @param {Object} res - Objeto de respuesta de Express.
 * @returns {Object} - La nueva Localidad creada.
 * @throws {Error} - Si hay un error al crear la Localidad.
 */
const createItem = async (req, res) => {
    try {
        const data = await Localidad.create(req.body);
        res.status(201).json({ success: true, data });
    } catch (e) {
        console.error('Error in createItem:', e);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

/**
 * Actualizar una Localidad existente por su ID.
 * @function updateItem
 * @param {Object} req - Objeto de solicitud de Express con el parámetro 'id' y los datos de la Localidad a actualizar.
 * @param {Object} res - Objeto de respuesta de Express.
 * @returns {Object} - La Localidad actualizada.
 * @throws {Error} - Si la Localidad no se encuentra o hay un error al actualizar.
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
 * Eliminar una Localidad por su ID (marcándola como eliminada).
 * @function deleteItem
 * @param {Object} req - Objeto de solicitud de Express con el parámetro 'id'.
 * @param {Object} res - Objeto de respuesta de Express.
 * @returns {Object} - Mensaje de éxito si se elimina correctamente.
 * @throws {Error} - Si la Localidad no se encuentra o hay un error al eliminar.
 */
const deleteItem = async (req, res) => {
    try {
        const { id } = req.params;
        const data = await findItemById(id, false);

        if (!data) {
            return res.status(404).json({ error: 'Record not found' });
        }

        await data.update({ deleted: true });

        res.status(200).json({ success: true, message: `Localidad item deleted successfully` });
    } catch (e) {
        console.error('Error in deleteItem:', e);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

/**
 * Restaurar una Localidad previamente eliminada por su ID.
 * @function restoreItem
 * @param {Object} req - Objeto de solicitud de Express con el parámetro 'id'.
 * @param {Object} res - Objeto de respuesta de Express.
 * @returns {Object} - Mensaje de éxito si se restaura correctamente.
 * @throws {Error} - Si la Localidad no se encuentra o hay un error al restaurar.
 */
const restoreItem = async (req, res) => {
    try {
        const { id } = req.params;
        const data = await findItemById(id, true);

        if (!data) {
            return res.status(404).json({ error: 'Record not found' });
        }

        await data.update({ deleted: false });

        res.status(200).json({ success: true, message: `Localidad item restored successfully` });
    } catch (e) {
        console.error('Error in restoreItem:', e);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

/**
 * Función para encontrar una Localidad por su ID.
 * @function findItemById
 * @param {Number} id - ID de la Localidad a buscar.
 * @param {Boolean} deleted - Indica si la Localidad está eliminada.
 * @returns {Object} - La Localidad encontrada o null si no se encuentra.
 * @throws {Error} - Si hay un error al buscar la Localidad.
 */
const findItemById = async (id, deleted) => {
    try {
        const data = await Localidad.findOne({
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
