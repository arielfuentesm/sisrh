//constante para el paquete de MySQL
const mysql = require('mysql');
//constante para el paquete Express
const express = require('express');
// variable para los metodos de express.
var app = express();
// constante para el paquete de bodyparser.
const bp = require('body-parser');

//Enviando los datos JSON a NodeJS API
app.use(bp.json());

// conectar a la base de datos (Mysql)
var mysqlConnection = mysql.createConnection({

    host: 'localhost',
    user: 'root',
    password: '',
    database: 'database1',
    multipleStatements: true

});

//Test de conexion a base de datos
mysqlConnection.connect((err)=>{
    if (!err) {
        console.log('Conexion Exitosa');
    } else {

        console.log('Error al conectar a la DB');
    }
});

//Ejecutar el server en un puerto especifico.

app.listen(3000, () => console.log('Server Running puerto: 3000'));

//Select <-> Get todas las personas con Procedimiento almacenado
app.get('/personas', (req, res) => {
    mysqlConnection.query('call sel_persona()', (err, rows, fields) => {
        if (!err) {
            res.status(200).json(rows[0]);
        } else {
            console.log(err);
        }
    });
});

//Insert <-> Post con procedimiento almacenado.
app.post('/personas', (req, res) => {
    let per = req.body;
    var sql = "SET @p0=?; \
               SET @p1=?; \
               SET @p2=?; \
               SET @p3=?; \
               SET @p4=?; \
               SET @p5=?; \
               SET @p6=?; \
               SET @p7=?; \
               SET @p8=?; \
               SET @p9=?; \
               CALL`INS_PERSONA`(@p0, @p1, @p2, @p3, @p4, @p5, @p6, @p7, @p8, @p9);";
    mysqlConnection.query(sql, [per.p0, per.p1, per.p2, per.p3, per.p4, per.p5, per.p6, per.p7, per.p8, per.p9], (err, rows, fields) => {
        if (!err) {
            res.send("Ingresado correctamente !!");
        } else {
            console.log(err);
        }
    });
});

//Update <-> Put a personas
app.put('/personas', (req, res) => {
    const {
        NOM_PERSONA
    } = req.body;
    const {
        COD_PERSONA
    } = req.params;
    mysqlconnection.query(
        "CALL PROC_UPD_PERSONAS(?,?)",
        [NOM_PERSONA, COD_PERSONA],
        (err, rows, fields) => {
            if (!err) {
                //retornar lo actualizado
                res.status(200).json(req.body);
            } else {
                console.log(err);
            }
        });
});