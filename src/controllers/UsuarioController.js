const Usuario = require('../models/Usuario');

module.exports = {
  async create(req, res) {
    const {
      nome, email, senha, token,
    } = req.body;
    const usuario = await Usuario.create({
      nome, email, senha, token,
    });
    return res.status(200).json(usuario);
  },

  async getAll(req, res) {
    const usuarios = await Usuario.findAll();
    return res.status(200).json(usuarios);
  },
};
