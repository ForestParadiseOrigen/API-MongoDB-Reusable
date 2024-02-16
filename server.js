const express = require("express")
const dotenv = require("dotenv")
const colors = require('colors')
const conectarDB = require('./config/db')
const cors = require('cors');

// Dependencias de las rutas creadas en ./routes
const examplesRoutes = require('./routes/examplesRoutes');


//vincular el archivo .env
dotenv.config(
    {path:'./config/.env'}
)

//CONECTAR A DB
conectarDB()

//construir objeto app
const app=express()

//confirmar que le llegara informacion json
app.use(express.json())
app.use(cors({
    origin:"*"
}))

//conectar las rutas al objeto app
app.use('/collection_name_replace',
    examplesRoutes
);

//un puerto de ejecucion
app.listen(process.env.PUERTO , ()=>{
    console.log(`Puerto del server en ejecucion: ${process.env.PUERTO}`.bgWhite.blue.bold)
})