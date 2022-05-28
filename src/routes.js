const express = require('express');

const app = express();

const usuario = require('./routes/usuario');
const login = require('./routes/login');
const evento = require('./routes/evento');
const resposta = require('./routes/resposta');

const loginController = require('./controllers/LoginController');

app.use('/login', login);
app.use('/usuario', usuario);
app.use('/evento', loginController.verificarToken, evento);
app.use('/resposta', loginController.verificarToken, resposta);

module.exports = app;
