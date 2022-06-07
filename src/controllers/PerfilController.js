// eslint-disable-next-line camelcase
const jwt_decode = require('jwt-decode');
const Usuario = require('../models/Usuario');
const helperController = require('./HelperController');

module.exports = {
  // TODO: Implementar upload de medias, e controller
  async get(req, res) {
    // #swagger.tags = ['perfil']
    // #swagger.description = 'Endpoint para ...'
    const token = req.headers.authorization;
    if (!token) return res.status(401).json({ auth: false, mensagem: 'Usuário não autorizado.' });
    const onlyToken = token.split(' ');

    if (!helperController.verificarToken(onlyToken[1])) return res.status(401).json({ auth: false, mensagem: 'Usuário não autorizado.' });

    const dados = jwt_decode(onlyToken[1]);

    const perfil = await Usuario.findByPk(dados.id);
    return res.status(200).json(perfil);
  },

  async update(req, res) {
    // #swagger.tags = ['perfil']
    // #swagger.description = 'Endpoint para ...'
    const usuarios = await Usuario.findAll();
    return res.status(200).json(usuarios);
  },
};
