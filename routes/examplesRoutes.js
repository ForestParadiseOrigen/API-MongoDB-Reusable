// Traemos el modelo de ejemplo que creamos en la carpeta ./models
const ExamplesModel = require("../models/examplesModel");

const moongose = require("mongoose");
const express = require("express");
const router = express.Router();

/*
    Vale, en las rutas establecemos las vias por las cuales se puede
    interactuar con las collecciones de la base de datos. Quiero decir,
    que por medio de las rutas asignamos links con los que se pueden realizar
    peticiones especificas.
*/

// Petición GET
/*
    En general, la ruta GET es la principal en toda API, entonces al asignarle 
    solamente un "/" facilitamos el acceso a la misma y ademas ponemos
    un punto inicial referencial para las el resto de las rutas.
*/
router.get("/", async (req, res) => {
  /*
        Despues de defiinir el tipo de acceso que va a aceptar, peticiones 
        o requerimientos, vamos a estructurar la respuesta del servidor.

        En este caso realizamos un Try & Catch para probar que nos dice el 
        server cuando la respuesta es positiva o negativa.
    */
  try {
    const examples = await ExamplesModel.find();

    if (examples.length > 0) {
      res.status(200).json({
        success: true,
        data: examples,
      });
    } else {
      res.status(400).json({
        success: false,
        message: "Maybe the examples is not exist...",
      });
    }
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
});

// Peticion GET con ID
/*
    En este caso, realmente a este tipo de peticiones se les suele llamer FindById,
    ya que esta tiene una condicion en la que solamente va a mostrar en su respuesta
    el registro de la colección que contenga en parametro especificado. En este caso,
    ese parametro es el ID del registro de la colección.

    En su ruta especificamos con el adicional ":id" que vamos a pasar un parametro 
    nuevo por medio de la misma.
*/
router.get("/:id", async (req, res) => {
    try {
        /*
            Aqui especificamos lo que representa desde ahora 
            "examplesID", asignandole el id de la respuesta.
        */ 
       examplesId = req.params.id; 

        if (!moongose.Types.ObjectId.isValid(examplesId)) {
            /*
                En este primer filtro vamos a verificar que la ruta tenga especificada 
                un ID con el cual poder proceder a realizar la busqueda objetiva.

                Si el ID no fue especificado lanzará una respuesta notificandolo.
            */
            res.status(500).json({
                success: false,
                msg: "The ID of the example is not valid...",
            });
        } else {
            // Ahora especificamos que pasa en caso de que si tengamos un ID con el que trabajar.
            const examplesId = await ExamplesModel.findById(examplesId);

            if (examplesId) {
                res.status(200).json({
                    success: true,
                    data: examplesId,
                });
            } else {
                res.status(400).json({
                    success: false,
                    menssage: `We could not find the example with the ID: ${examplesId}...`,
                });
            }
        }
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
});

// Petición POST
// Esta es la peticion por la que vamos a realizar la creacion de registros en la base de datos.

router.post("/", async (req, res) => {
  try {

    // Almacenamos en esta constante el contenido, el cual debe ser compatible con el modelo.
    const newExamples = await ExamplesModel.create(req.body);

    res.json({
      success: true,
      data: newExamples,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
});

// PETICION PUT
/*
    La peticion PUT es como el FindByID, precisa de un parametro especifico e 
    unico para poder realizar su trabajo. En este casi estamos pasandole el 
    identificador unico del registro de la coleccion para que se modifique ese 
    mismo y no el resto.
*/
router.put("/:id", async (req, res) => {
  try {

    /*  
        Primero almacena el parametro ID proveniente del resultado del body en 
        una constante en la que almacenarlo y utilizarlo posteriormente.
    */
    const examplesId = req.params.id;
    if (!moongose.Types.ObjectId.isValid(examplesId)) {
      res.status(500).json({
        success: false,
        msg: "The ID of the example is not valid...",
      });
    } else {
      const updExamples = await ExamplesModel.findByIdAndUpdate(
        examplesId,
        req.body,
        {
          new: true,
        }
      );
      if (updExamples) {
        res.status(200).json({
          success: true,
          data: updExamples,
        });
      } else {
        res.status(400).json({
          success: false,
          menssage: `We could find a example with ID like: ${pendientesId}...`,
        });
      }
    }
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
});

// PETICION DELETE
/*
    La petcion DELETE no es muy distinta a las demás, se compone y trabaja gracias a lo mismo, el ID.
*/

router.delete("/:id", async (req, res) => {
  try {
    const examplesId = req.params.id;
    if (!moongose.Types.ObjectId.isValid(examplesId)) {
      res.status(500).json({
        success: false,
        msg: "The ID of the example is not valid...",
      });
    } else {
      const delExamples = await ExamplesModel.findByIdAndDelete(examplesId);
      if (delExamples) {
        res.json({
          success: true,
          data: delExamples,
        });
      } else {
        res.status(400).json({
          success: false,
          menssage: `We could not find the example with the ID like: ${examplesId}...`,
        });
      }
    }
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
});

module.exports = router;
