// Importacion de las dependencias necesarias para que funcione el proyecto.
const { MongoClient } = require("mongodb");
var Mongclient = require("mongodb").MongoClient;

const res = require("express/lib/response");
var Express = require("express");

const multer = require("multer");
var cors = require("cors");

var app = Express();
app.use(cors());

// Aqui generalmente el url de Mongo sea la misma.
var CONNECTION_STRING="mongodb://localhost:27017"
// Este nombre es reemplazable, debe ser el nombre de la bd a la que te vas a conectar.
var DATABASENAME="db_name_replace"; 
var database;

app.listen(
    5038, () =>{
        MongoClient.connect(
            CONNECTION_STRING, (error, client) => {
                database = client.db(DATABASENAME)
                console.log("Mongo DB esta vivo!")
            }
        )
    }
)

app.get(
    '/collection_name_replace', (request, response) => {
        database
        .collection("Collection_name_replace")
        .find({})
        .toArray(
            (error, result) => {
                response.send(result);
                console.log(result);
            }
        )
    }
);
