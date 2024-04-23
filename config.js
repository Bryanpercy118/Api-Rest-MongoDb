const mongoose = require('mongoose');

const dbconnect = () => {
    mongoose.connect("mongodb://localhost:27017/user_prueba")
        .then(() => {
            console.log("Conectado a la base de datos");
        })
        .catch((err) => {
            console.error("Error al conectar a la base de datos:", err);
        });
};

module.exports = dbconnect;
