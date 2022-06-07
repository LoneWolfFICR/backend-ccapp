const crypto = require('crypto');
const jwtDecode = require('jwt-decode');
const Usuario = require('../models/Usuario');

module.exports = {
  // TODO: Implementar upload de medias, e controller
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

  async myinfo(req, res) {
    // #swagger.tags = ['usuario']
    // #swagger.description = 'Endpoint para obter do usuario logado ou outro usuario se for admin.'
    if (!req.body.id) return res.status(400).json({ auth: true, mensagem: 'Id não informada ou não conseguir localizar.' });
    const { id } = req.body;
    const token = req.headers.authorization;
    // eslint-disable-next-line camelcase
    const dados = jwtDecode(token);
    if (dados.usuario.admin === true
      || dados.usuario.sys_admin === true
      || dados.usuario.id === id) {
      const myinfo = await Usuario.findByPk(id);
      return res.status(200).json(myinfo);
    }
    return res.status(401).json({ auth: true, mensagem: 'Id informado invalido.' });
  },

  async update(req, res) {
    // #swagger.tags = ['usuario']
    // #swagger.description = 'Endpoint para atualizar usuario logado ou outro usuario se admin.'
    if (!req.body.id) return res.status(400).json({ auth: true, mensagem: 'Id não informada ou não conseguir localizar.' });
    const {
      // eslint-disable-next-line camelcase
      id, nome, email, senha, token, is_admin, sys_admin,
    } = req.body;
    const tokenUser = req.headers.authorization;
    // eslint-disable-next-line camelcase
    const dados = jwtDecode(tokenUser);
    if (dados.usuario.admin === true
      || dados.usuario.sys_admin === true
      || dados.usuario.id === id) {
      const senhaCript = crypto.createHash('sha256').update(senha).digest('hex');
      // Só atualiza o is_admin e sys_admin se for um sys_admin.
      if (dados.usuario.sys_admin) {
        const update = await Usuario.update({
          id,
          nome,
          email,
          senha: senhaCript,
          token,
          // eslint-disable-next-line camelcase
          is_admin: is_admin != null || undefined ? is_admin : false,
          // eslint-disable-next-line camelcase
          sys_admin: sys_admin != null || undefined ? sys_admin : false,
        }, { where: { id } });
        if (!update) return res.status(500).json({ error: true, mensagem: 'Ocorreu um erro ao atualizar os dados.' });
        return res.status(200).json({ error: false, mensagem: 'Usuario atualizado com sucesso.' });
      }
      const update = await Usuario.update({
        id, nome, email, senha, token,
      }, { where: { id } });
      if (!update) return res.status(500).json({ error: true, mensagem: 'Ocorreu um erro ao atualizar os dados.' });
      return res.status(200).json({ error: false, mensagem: 'Usuario atualizado com sucesso.' });
    }
    return res.status(401).json({ auth: true, mensagem: 'Id informado invalido.' });
  },
};
