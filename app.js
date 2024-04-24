require('dotenv').config(); 
const express = require('express');
const dbconnect = require('./config');
const apiRoutes = require('./Routes/apiRoutes');

const startServer = async () => {
    const app = express();
    app.use(express.json());
    app.use('/api', apiRoutes);
    await dbconnect();
    const PORT = process.env.PORT;
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
};

startServer();
