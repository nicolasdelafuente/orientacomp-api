const getAll = async (Model, req, res, options = {}) => {
  try {
    const {
      excludeDefaultAttributes = true,
      relations = [],
      excludeAttributes = [],
      where = { is_deleted: false },
      order = [['id', 'ASC']],
    } = options;

    const queryOptions = {
      where,
      order,
    };

    if (excludeDefaultAttributes) {
      queryOptions.attributes = {
        exclude: [
          'is_deleted',
          'deleted_by',
          'deleted_at',
          'created_at',
          'updated_at',
          ...excludeAttributes,
        ],
      };
    } else if (excludeAttributes.length > 0) {
      queryOptions.attributes = { exclude: excludeAttributes };
    }

    if (relations.length > 0) {
      queryOptions.include = relations;
    }

    const items = await Model.findAll(queryOptions);

    res.json({ data: items });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

const getOne = async (Model, req, res, options = {}) => {
  try {
    const {
      excludeDefaultAttributes = true,
      relations = [],
      excludeAttributes = [],
      where = { is_deleted: false },
      searchFields = ['id'],
    } = options;

    const queryOptions = {
      where: {
        ...where,
      },
    };

    searchFields.forEach(field => {
      if (req.params[field]) {
        queryOptions.where[field] = req.params[field];
      }
    });

    if (excludeDefaultAttributes) {
      queryOptions.attributes = {
        exclude: [
          'is_deleted',
          'deleted_by',
          'deleted_at',
          'created_at',
          'updated_at',
          ...excludeAttributes,
        ],
      };
    } else if (excludeAttributes.length > 0) {
      queryOptions.attributes = { exclude: excludeAttributes };
    }

    if (relations.length > 0) {
      queryOptions.include = relations;
    }

    const item = await Model.findOne(queryOptions);

    if (!item) {
      return res.status(404).json({ error: 'Item no encontrado' });
    }

    res.json({ data: item });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

module.exports = {
  getAll,
  getOne,
};
