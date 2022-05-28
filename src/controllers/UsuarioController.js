const crypto = require('crypto');
const Usuario = require('../models/Usuario');

module.exports = {
  async create(req, res) {
    // #swagger.tags = ['usuario']
    // #swagger.description = 'Endpoint para criar um usuário.'
    const {
      nome, email, senha, token,
    } = req.body;

    const senhaCript = crypto.createHash('sha256').update(senha).digest('hex');

    const usuario = await Usuario.create({
      nome, email, senha: senhaCript, token,
    });
    return res.status(200).json(usuario);
  },

  async getAll(req, res) {
    // #swagger.tags = ['usuario']
    // #swagger.description = 'Endpoint para obter todos os usuários.'
    const usuarios = await Usuario.findAll();
    return res.status(200).json(usuarios);
  },
};
