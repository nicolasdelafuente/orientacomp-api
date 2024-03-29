const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');
const migrationsPath = path.resolve('src/database/migrations');
const files = fs.readdirSync(migrationsPath);

for (const file of files) {
  if (file !== 'dummy.txt') {
    fs.unlinkSync(path.join(migrationsPath, file));
  }
}

const commands = [
  'npx sequelize-cli model:generate --name Genero --attributes nombre:string,deleted:boolean --force',
  'npx sequelize-cli model:generate --name DocumentoTipo --attributes nombre:string,deleted:boolean --force',
  'npx sequelize-cli model:generate --name SeguimientoTipo --attributes nombre:string,deleted:boolean --force',
  'npx sequelize-cli model:generate --name Rol --attributes nombre:string,deleted:boolean --force',
  'npx sequelize-cli model:generate --name Pais --attributes nombre:string,nacionalidad:string,iso:string,deleted:boolean --force',
  'npx sequelize-cli model:generate --name Provincia --attributes nombre:string,id_pais:integer,deleted:boolean --force',
  'npx sequelize-cli model:generate --name Localidad --attributes nombre:string,id_provincia:integer,deleted:boolean --force',
  'npx sequelize-cli model:generate --name Instituto --attributes nombre:string,deleted:boolean --force',
  'npx sequelize-cli model:generate --name Carrera --attributes nombre:string,id_instituto:integer,deleted:boolean --force',
  'npx sequelize-cli model:generate --name Estado --attributes nombre:string,color:string,deleted:boolean --force',
  'npx sequelize-cli model:generate --name Categoria --attributes nombre:string,color:string,deleted:boolean --force',
  'npx sequelize-cli model:generate --name Seguimiento --attributes id_seguimiento_tipo:integer,id_categoria:integer,id_estado:integer,id_orientado:integer,id_seguidor:integer,motivo:string,deleted:boolean --force',
  'npx sequelize-cli model:generate --name Entrevista --attributes id_seguimiento:integer,id_entrevistador:integer,observacion:string,accion:string,id_almacenamiento:integer,deleted:boolean --force',
  'npx sequelize-cli model:generate --name Persona --attributes nombre:string,apellido:string,email:string,id_documento:integer,documento:string,telefono:string,id_genero:integer,direccion:string,id_pais:integer,id_provincia:integer,id_localidad:integer,id_carrera:integer,deleted:boolean --force',
  'npx sequelize-cli model:generate --name Usuario --attributes id_persona:integer,id_rol:integer,password:string,deleted:boolean --force',
  'npx sequelize-cli model:generate --name Almacenamientos --attributes nombre:string,url:string,deleted:boolean --force',
];

try {
  for (const command of commands) {
    console.log(`Executing: ${command}`);
    execSync(command, { stdio: 'inherit' });
  }
  console.log('All models created successfully.');
} catch (error) {
  console.error('Error creating models:', error.message);
  process.exit(true);
}
