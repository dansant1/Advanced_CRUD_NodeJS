Tipos = new Mongo.Collection('tipoos'); // BD para los tipos de usuarios
Usuarios = new Mongo.Collection('usuarios'); // BD para los usuarios de la empresa con su tipo
Secciones = new Mongo.Collection('secciones'); // BD para las secciones
Subseccion = new Mongo.Collection('subseccion') // BD para las subsecciones - titulo y descripcion
// Definimos el storage adapter GridFS
let docStore = new FS.Store.GridFS("Archivos", {
  maxTries: 3
});


// Creamos la DB para Documentos
Archivos = new FS.Collection(" Archivos", {
  stores: [docStore]
});

// agregamos los permisos allow/deny
Archivos.allow({
  insert: function () {
    return true;
  },
  update: function () {
    return true;
  },
  remove: function () {
    return true;
  },
  download: function () {
    return true;
  }
});