// Importación de módulos
import express from "express";
import cors from "cors";
//import "./loadEnvironment.mjs";
//import blog from "./routes/blog.mjs";
import db from './database.js'; // Importa la conexión a la base de datos

// Define el puerto en el que se ejecutará el servidor
const PORT = process.env.PORT || 5050;
const app = express(); // Crea una instancia de la aplicación Express

// Usa el middleware cors para habilitar el intercambio de recursos de origen cruzado (CORS)
app.use(cors());

// Usa el middleware express.json para analizar las solicitudes entrantes con cargas útiles JSON
app.use(express.json());

// Usa el enrutador blog para manejar las solicitudes a la ruta /blog
//app.use("/blog", blog);

// Inicia el servidor Express en el puerto especificado
app.listen(PORT, () => {
  console.log(`El servidor está corriendo en el puerto: ${PORT}`);
});

// Prueba la conexión a la base de datos
db.query('SELECT 1', (err, results) => {
  if(err) {
    console.error('Error al conectar a la base de datos:', err);
    return;
  }
  console.log('Conexión a la base de datos establecida');
});
