/*
    Este es un modelo, creado y estructurado con Mongoose, 
    es necesario que entendamos que lo que definamos aqui va a
    ser importante para las rutas.

    Me explico, aqui estas definiendo los atrubutos, los parametros y las condiciones
    que se deben tener en cuenta para poder o no aceptar la información que 
    interactua con la base de datos.

    Es decir que si agregas un atrubito y este es requerido, no se va a poder
    realizar un registro en la colección si no se coloca ese atributo.
*/


const mongoose = require('mongoose');


/* 
    Esta constante almacena en formato JSON la estructura de nuestro modelo y las 
    caracteristicas que debe seguir para que se permita el manejo de información
    de manera estructurada.
*/

const examplesSchema = new mongoose.Schema(
    {
        /*
            Es clara y facil la manera en la ques estructuramos el modelo. 
            Puede ser desde lo mas facil, definiendo que tipo de dato es, 
            o si es obligatorio su especificacion en las consultas o no.

            Sin embargo, creo que para profundizar y conocer todo aquello
            que ofrecen los modelos de Mongoose, deberas de ver la documentación
            oficial.
        */

        //------------------------------------------------------------------------------//
        
        "atribute_name": {
            // El tipo de dato del atrubuto, puede ser String, Number entre otros mas.
            type: String,
            
            /*
                Puedes declarar si un atributo es requerido o no, en este caso, 
                hasta puedes definir el mensaje de respuesta en caso de que
                se imcumpla la condicion del atributo.
            */
            required: [
                true,
                "String atribute is required. Just is a example."
            ]
        }

        //------------------------------------------------------------------------------//
    }
);

/*
    Finalmente debemos exportar nuestro modelo para que en importarlo eb su
    respectiva ruta, en la cual especificaremos el camino que se debe seguir 
    para realizar acciones entre la base de datos y el usuario.
*/

module.exports = mongoose.model(
    "Examples",
    examplesSchema
);