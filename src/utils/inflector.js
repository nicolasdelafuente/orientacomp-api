const pluralSingularMap = {
  carreras: 'carrera',
  categorias: 'categoria',
  entrevistas: 'entrevista',
  estados: 'estado',
  generos: 'genero',
  institutos: 'instituto',
  localidades: 'localidad',
  paises: 'pais',
  personas: 'persona',
  provincias: 'provincia',
  roles: 'rol',
  seguimientos: 'seguimiento',
  storages: 'storage',
  tiposDeDocumentos: 'tipoDeDocumento',
  tiposDeSeguimientos: 'tipoDeSeguimiento',
  usuarios: 'usuario',
};

const singularPluralMap = Object.fromEntries(
  Object.entries(pluralSingularMap).map(([plural, singular]) => [
    singular,
    plural,
  ]),
);

function pluralize(word) {
  if (singularPluralMap[word]) {
    return singularPluralMap[word];
  }
  if (Object.values(singularPluralMap).includes(word)) {
    return word; // La palabra ya está en plural
  }
  throw new Error(`Word "${word}" not found in the pluralization map.`);
}

function singularize(word) {
  if (pluralSingularMap[word]) {
    return pluralSingularMap[word];
  }
  if (Object.values(pluralSingularMap).includes(word)) {
    return word; // La palabra ya está en singular
  }
  throw new Error(`Word "${word}" not found in the singularization map.`);
}

module.exports = {
  pluralize,
  singularize,
};
