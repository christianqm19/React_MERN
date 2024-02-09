//Requerimos el modulo: mongoose
const mongoose = require('mongoose');

//Creamos la BD: mernstack
const URI = process.env.MONGODB_URI 
    ? process.env.MONGODB_URI
    : 'mongodb://localhost/databasetest';

mongoose.connect(URI
//    ,{
//    useNewUrlParser: true,
//    useCreateIndex: true,
//    useFindAndModify:true
//    }
);

//Guardamos la conexion en una constante
const connection = mongoose.connection;

//Mostramos un mensaje si existe la conexion
connection.once('open', () => {
    console.log('Se realizó la conexión con la BD..');
});
