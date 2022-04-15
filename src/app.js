const express = require('express');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const test = require('./routes/teste'); // Rota de teste inicial

app.use('/', test);

module.exports = app;
