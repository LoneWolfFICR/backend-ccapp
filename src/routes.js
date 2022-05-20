const express = require('express');

const app = express();

const rotaUsuario = require('./routes/usuario');
// const rotaUsuario = require('./routes/usuario');

app.use('/usuario', rotaUsuario);
// app.use('/evento', rotaUsuario);

app.use('', (req, res) => { // Rota coringa
  res.send('Rota inexistente');
});

module.exports = app;
