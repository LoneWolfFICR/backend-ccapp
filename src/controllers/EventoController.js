const Evento = require('../models/Evento');
const Usuario = require('../models/Usuario');

module.exports = {
  async create(req, res) {
    const { id } = req.params; // Id do usuario
    const {
      titulo, descricao, local, media,
    } = req.body;

    const usuario = await Usuario.findByPk(id);

    if (!usuario) {
      return res.status(404).json({ mensagem: 'Usuario não encontrado.' });
    }

    const evento = await Evento.create({
      titulo, descricao, local, media, id_usuario: id,
    });
    return res.status(200).json(evento);
  },
};
