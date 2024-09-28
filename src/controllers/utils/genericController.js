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
      return res.status(404).json({ error: 'Item not found' });
    }

    res.json({ data: item });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

const create = async (Model, req, res) => {
  try {
    if (Object.keys(Model.associations).length > 0) {
      const associationErrors = await validateAssociations(Model, req.body);
      if (associationErrors.length > 0) {
        return res
          .status(400)
          .json({ error: 'Validation error', details: associationErrors });
      }
    }

    const newItem = await Model.create(req.body);

    const queryOptions =
      Object.keys(Model.associations).length > 0
        ? {
            include: Object.values(Model.associations).map(association => ({
              model: association.target,
              as: association.as,
            })),
          }
        : {};

    const createdItem = await Model.findByPk(newItem.id, queryOptions);

    res.status(201).json({ data: createdItem });
  } catch (error) {
    console.error(error);
    if (error.name === 'SequelizeValidationError') {
      return res
        .status(400)
        .json({ error: 'Validation error', details: error.errors });
    }
    res.status(500).json({ error: 'Internal server error' });
  }
};

const validateAssociations = async (Model, data) => {
  const associations = Object.values(Model.associations);
  const errors = [];

  for (const association of associations) {
    if (association.associationType === 'BelongsTo') {
      const foreignKey = association.foreignKey;
      const targetModel = association.target;
      const foreignId = data[foreignKey];

      if (foreignId) {
        const associatedItem = await targetModel.findOne({
          where: {
            id: foreignId,
            is_deleted: false,
          },
        });

        if (!associatedItem) {
          errors.push(
            `${association.as} with id ${foreignId} does not exist or is deleted.`,
          );
        }
      }
    }
  }

  return errors;
};

module.exports = {
  getAll,
  getOne,
  create,
};
