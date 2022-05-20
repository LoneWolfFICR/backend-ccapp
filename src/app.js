require('./database');
const express = require('express');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const test = require('./routes/teste'); // Rota de teste inicial
const usuario = require('./routes/usuario');
const evento = require('./routes/evento');
const resposta = require('./routes/resposta');

app.use('/', test);
app.use('/usuario', usuario);
app.use('/evento', evento);
app.use('/resposta', resposta);

module.exports = app;
