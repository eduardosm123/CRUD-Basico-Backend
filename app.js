
const express = require('express');
const cors = require("cors");
require('dotenv').config();
// centraliza as configuracoes
const app = express()

// middwares
app.use(cors())
app.use(express.json()) //cominicacao via json

// DB connection
const conn = require("./db/conn");
conn();

// routes
const routes = require("./routes/router");

app.use('/api', routes);

app.listen(3000, function() {
    console.log("Servidor Online!!")
})