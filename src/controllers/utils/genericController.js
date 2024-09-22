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

module.exports = {
  getAll,
};
