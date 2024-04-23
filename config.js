require('dotenv').config();
const mongoose = require('mongoose');

const dbconnect = () => {
    mongoose.connect(process.env.DB_URL)
        .then(() => {
            console.log("Conectado a la base de datos");
        })
        .catch((err) => {
            console.error("Error al conectar a la base de datos:", err);
        });
};

module.exports = dbconnect;
