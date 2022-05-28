const Evento = require('../models/Evento');
const Usuario = require('../models/Usuario');

module.exports = {
  async create(req, res) {
    // #swagger.tags = ['evento']
    // #swagger.description = 'Endpoint para criar o evento.'
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
  async getAll(req, res) {
    // #swagger.tags = ['evento']
    // #swagger.description = 'Endpoint para obter todos os eventos, (Com limite de 100).'
    const eventos = await Evento.findAll({ limit: 100 });
    return res.status(200).json(eventos);
  },
  async eventosUsuario(req, res) {
    // #swagger.tags = ['evento']
    // #swagger.description = 'Endpoint para obter todos os eventos do usuario.'
    const { id } = req.params;
    const eventos = await Evento.findAll({ where: { id_usuario: id } });
    return res.status(200).json(eventos);
  },
  async eventoId(req, res) {
    // #swagger.tags = ['evento']
    // #swagger.description = 'Endpoint para obter todos o evento do id informado.'
    const { id } = req.params;
    const evento = await Evento.findByPk(id);
    return res.status(200).json(evento);
  },
};
