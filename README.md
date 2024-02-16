-- MONGO - API - reutilizable

Este es un proyecto modelo creado con el objetivo de convertirse en una herramienta, en un recurso practico.

La razón por la que comenzé este proyecto pequeño es porque ya habia tenido que crear una API en mongo varias veces. El proceso se repite, asi que no hace falta volver a hacerlo desde cero todo el tiempo. Con tener una plantilla con la cual guiarte y poder tenerla desde donde y cuando quieras es un privilegio.

Es por esa razon que este modelo esta compuesto por modelos y rutas separadas, ademas de archivos de configuracion que ayudaran a especificar las caracteristicas que necesita el proyecto para funcionar.

-- DEPENDENCIAS

Las dependencias estan especificadas en el archivo package.json, sin embargo, creo que desde aqui puedo mencionarlas todas.
* Express
* CORS
* Colors
* MongoDB
* Mongoose
* Dotenv
* Nodemon
* Multer

Para iniciar no hace falta mas que un 'npm run dev', la respuesta en la terminal deberia ser el pueto del server y si la conexion es exitosa.

-- .ENV
Creo que es mas facil explicar esas 2 lineas de codigo directamente desde aqui, la verdad es que es una forma de explicarle a Dotenv los parametros que debe tener en cuenta para crear la conexion con la base de datos.

Puedes almacenar la ULR de la base de datos que hayas creado un MongoDB y definir un puerto personalizado con el cual hacer puente con la misma.