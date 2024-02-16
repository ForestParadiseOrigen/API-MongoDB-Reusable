/*
    En este archivo utilizamos todo aquello que definimos en el 
    archivo .env, no hace falta importarlo, ya tenemos la
    dependencia instalada en el proyecto, por lo que los archivos
    .env deben ser globales para el proyecto en general.

    En este caso, mongoose utilizarala informacion de las variables
    declaradas  en el .env para establecer la conexion entre el server
    local y la base de datos de MongoDB.
*/

const mongoose = require('mongoose');

const conectarbd = async() => {
    // Aqui es donde le pasamos a mongose la variable MONGO_URL para que cree la conexion.
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Conexión establecida con exito".bgWhite.blue);
}

module.exports = conectarbd