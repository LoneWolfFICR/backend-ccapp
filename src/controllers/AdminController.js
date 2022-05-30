// eslint-disable-next-line camelcase
const jwt_decode = require('jwt-decode');
const Usuario = require('../models/Usuario');

module.exports = {
  async setAdmin(req, res) {
    // #swagger.tags = ['admin']
    // #swagger.description = 'Endpoint para adicionar um usuario admin.'
    const { id } = req.body;
    const token = req.headers.authorization;
    const onlyToken = token.split(' ');
    const dados = jwt_decode(onlyToken[1]);

    if (!dados.usuario.sys_admin) {
      return res.status(401).json({ mensagem: 'Usuario não autorizado.' });
    }

    const usuario = await Usuario.findByPk(id);

    if (!usuario) {
      return res.status(404).json({ mensagem: 'Usuario não encontrado.' });
    }

    const updateUsuario = await Usuario.update({
      is_admin: 1,
    }, {
      where: { id },
    });

    if (!updateUsuario) {
      return res.status(500).json({ mensagem: 'Usuario não foi atualizado.' });
    }
    return res.status(200).json({ mensagem: 'Usuario atualizado com sucesso.' });
  },
  async setSysAdmin(req, res) {
    // #swagger.tags = ['admin']
    // #swagger.description = 'Endpoint para adicionar um usuario SysAdmin.'
    const { id } = req.body;
    const token = req.headers.authorization;
    const onlyToken = token.split(' ');
    const dados = jwt_decode(onlyToken[1]);

    if (!dados.usuario.sys_admin) {
      return res.status(401).json({ mensagem: 'Usuario não autorizado.' });
    }

    const usuario = await Usuario.findByPk(id);

    if (!usuario) {
      return res.status(404).json({ mensagem: 'Usuario não encontrado.' });
    }

    const updateUsuario = await Usuario.update({
      sys_admin: 1,
    }, {
      where: { id },
    });

    if (!updateUsuario) {
      return res.status(500).json({ mensagem: 'Usuario não foi atualizado.' });
    }
    return res.status(200).json({ mensagem: 'Usuario atualizado com sucesso.' });
  },
};
