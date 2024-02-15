//Aqui importa los paquetes mysql y dotenv, y establece la conexión a la base de datos
//Importacion de libreria
require('dotenv').config();
const mysql = require('mysql');

//Creando conexion a BASE DE DATOS
const conexionDB = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE
});

//CONECTANDO A LA BASE DE DATOS
conexionDB.connect((err) => {
  if(err) {
    throw err;
  }
  console.log('Conexión a la base de datos establecida');
});

module.exports = conexionDB;


