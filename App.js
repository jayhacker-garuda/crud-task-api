const express = require('express');

const app = express();
const mongoose = require('./DB/Server/mongoose')

app.listen(3000, () => {
    console.log(`Server started 🚀🚀🚀 on Port 3000`);
})
