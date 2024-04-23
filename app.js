const express = require('express');
const dbconnect = require('./config');
const app = express();
const router = express.Router();

let message = 'server is running on port 3001';


router.get("/", (req, res) => {
    res.send('prueba');
})

app.use(router)
app.listen(3001, () => {
    console.log(message);
})

dbconnect();