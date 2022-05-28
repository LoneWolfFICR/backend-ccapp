require('./database');
const express = require('express');
const swaggerUI = require('swagger-ui-express');
const rotas = require('./routes');

const swaggerDocument = require('../swagger_output.json');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument));
app.use('/', rotas);

module.exports = app;
