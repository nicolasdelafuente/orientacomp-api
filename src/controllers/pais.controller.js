const Pais = require('../database/models/Pais.model');

const Model = Pais;

const getPaises = async (req, res) => {
  try {
    //TODO throw new Error('Forzando un error para pruebas');
    const paises = await Model.findAll({
      where: {
        is_deleted: false,
      },
      attributes: {
        exclude: [
          'is_deleted',
          'deleted_by',
          'deleted_at',
          'created_at',
          'updated_at',
        ],
      },
      order: [['id', 'DESC']],
    });

    res.json({ data: paises });
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  getPaises,
};
