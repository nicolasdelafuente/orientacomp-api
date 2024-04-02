const checkUniqueField = async (Model, field, value) => {
  const existingRecord = await Model.findOne({ where: { [field]: value } });
  if (existingRecord) {
    return { error: `${field.toUpperCase()}_ALREADY_EXISTS`, statusCode: 409 };
  }
};
  
  module.exports = { checkUniqueField }; 