const Evento = require('../models/Evento');
const Usuario = require('../models/Usuario');
const Resposta = require('../models/Resposta');

module.exports = {
  async create(req, res) {
    const {
      idUsuario, idEvento, descricao, media,
    } = req.body;

    const usuario = await Usuario.findByPk(idUsuario);

    if (!usuario) {
      return res.status(404).json({ mensagem: 'Usuario não encontrado.' });
    }

    const evento = await Evento.findByPk(idEvento);

    if (!evento) {
      return res.status(404).json({ mensagem: 'Evento não encontrado.' });
    }

    const resposta = await Resposta.create({
      descricao, media, id_usuario: idUsuario, id_evento: idEvento,
    });

    return res.status(200).json(resposta);
  },
};
