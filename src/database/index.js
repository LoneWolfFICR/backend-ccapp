const Sequelize = require('sequelize');
const dbConfig = require('../../config/database');

const Usuario = require('../models/Usuario');
const Evento = require('../models/Evento');
const Resposta = require('../models/Resposta');

const connection = new Sequelize(dbConfig);

Usuario.init(connection);
Evento.init(connection);
Resposta.init(connection);

Evento.associate(connection.models);
Resposta.associate(connection.models);

module.exports = connection;
