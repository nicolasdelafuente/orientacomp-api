const createGenericController = (Model, options = {}) => {
  const { relations = [], excludeAttributes = [] } = options;

  const commonOptions = {
    include: relations,
    attributes: { exclude: excludeAttributes },
  };

  const deletionFields = [
    'is_deleted',
    'deleted_by',
    'deleted_at',
    'created_at',
    'updated_at',
  ];

  const protectedFields = [
    'is_deleted',
    'deleted_by',
    'created_at',
    'updated_at',
    'deleted_at',
  ];

  const getItemsBase = async (includeDeleted = false) => {
    let whereClause = includeDeleted ? {} : { is_deleted: false };
    let attributes = includeDeleted ? {} : { exclude: deletionFields };

    const includeRelations = relations.map(relation => {
      return {
        ...relation,
        attributes: {
          exclude: [...deletionFields, ...excludeAttributes],
        },
      };
    });

    return {
      ...commonOptions,
      where: whereClause,
      attributes: {
        ...attributes,
        exclude: [...(attributes.exclude || []), ...excludeAttributes],
      },
      include: includeRelations,
    };
  };

  return {
    getItems: async (req, res) => {
      try {
        const includeDeleted = req.path.endsWith('/all');
        const options = await getItemsBase(includeDeleted);
        const items = await Model.findAll(options);
        res.json({ data: items });
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
      }
    },

    getItemById: async (req, res) => {
      try {
        const includeDeleted = req.path.endsWith('/all');
        const options = await getItemsBase(includeDeleted);
        options.where = { ...options.where, id: req.params.id };
        const item = await Model.findOne(options);
        if (item) {
          res.json({ data: item });
        } else {
          res.status(404).json({ error: 'Item not found' });
        }
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
      }
    },

    createItem: async (req, res) => {
      try {
        const item = await Model.create(req.body);
        res.status(201).json({ data: item });
      } catch (error) {
        console.error(error);
        res.status(400).json({ error: 'Bad request' });
      }
    },

    updateItem: async (req, res) => {
      try {
        const item = await Model.findOne({
          where: { id: req.params.id, is_deleted: false },
        });

        if (!item) {
          return res
            .status(404)
            .json({ error: 'Item not found or already deleted' });
        }
        const updateData = Object.keys(req.body).reduce((acc, key) => {
          if (!protectedFields.includes(key)) {
            acc[key] = req.body[key];
          }
          return acc;
        }, {});

        const [updated] = await Model.update(updateData, {
          where: { id: req.params.id, is_deleted: false },
        });

        if (updated) {
          const updatedItem = await Model.findByPk(
            req.params.id,
            commonOptions,
          );
          res.json({ data: updatedItem });
        } else {
          res.status(400).json({ error: 'Update failed' });
        }
      } catch (error) {
        console.error(error);
        res.status(400).json({ error: 'Bad request' });
      }
    },

    deleteItem: async (req, res) => {
      try {
        const item = await Model.findOne({
          where: { id: req.params.id, is_deleted: false },
        });

        if (!item) {
          return res
            .status(404)
            .json({ error: 'Item not found or already deleted' });
        }

        await Model.update(
          { is_deleted: true },
          { where: { id: req.params.id } },
        );

        res.json({ message: 'Item deleted successfully' });
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
      }
    },
  };
};

module.exports = { createGenericController };
