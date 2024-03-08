const { Carrera, Instituto } = require("../models");

const attributes = [
    "id",
    "nombre",
    "createdAt",
    "updatedAt"
]

/**
 * Obtener lista de Base de datos
 * @param {*} req 
 * @param {*} res 
 */
const getItems = async (req, res) => {
    try {
        const data = await Carrera.findAll({
            where: {
                deleted: false
            },
            attributes: { exclude: ['deleted'] }
        });
        res.send({ data });
    } catch (e) {
        console.log(e.message);
    }
};


/**
 * Obtener lista de Base de datos
 * @param {*} req 
 * @param {*} res 
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
        console.log(e.message);
    }
}

/**
 * Obtener un registro de Base de datos
 * @param {*} req 
 * @param {*} res 
 */
const createItem = async (req, res) => {
    try {
        const data = await Carrera.create(req.body);
        res.status(201).json({ success: true, data });

    } catch (e) {
        console.log(e.message);
    }
}

/**
 * Editar un registro de Base de datos
 * @param {*} req 
 * @param {*} res 
 */
const updateItem = async (req, res) => {
    try {
        const { id } = req.params;
        const data = await findItemById(id, false);

        if (!data) {
            return res.status(404).json({ error: 'Record not found' });
        }
        const body = req.body;

        const updatedItem = await data.update(body);

        res.status(200).json({ success: true, data: updatedItem });
    } catch (e) {
        console.log(e.message);
    }
}
/**
 * Eliminar un registro de Base de datos
 * @param {*} req 
 * @param {*} res 
 */
const deleteItem = async (req, res) => {
    try {
        const { id } = req.params;

        const data = await findItemById(id, false);

        if (!data) {
            return res.status(404).json({ error: 'Record not found' });
        }

        await data.update({ deleted: true });

        res.status(200).json({ success: true, message: `Carrera item deleted successfully` });
    } catch (e) {
        console.log(e.message);
    }
}


const restoreItem = async(req, res) => {
    try {
        const { id } = req.params;
        const data = await findItemById(id, true);

        if (!data) {
            return res.status(404).json({ error: 'Record not found' });
        }

        await data.update({ deleted: false });

        res.status(200).json({ success: true, message: `Carrera item restored successfully` });
    } catch (e) {
        console.log(e.message);
    }
}


const findItemById = async (id, deleted) => {
    try {
        const data = await Carrera.findOne({
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
}

module.exports = { getItems, getItem, createItem, updateItem, deleteItem, restoreItem };