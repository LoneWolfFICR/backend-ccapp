require('dotenv').config();
const crypto = require('crypto');
const jwt = require('jsonwebtoken');
const Usuario = require('../models/Usuario');

const expirarToken = 180; // Tempo para expirar o token em minutos;

module.exports = {
  async login(req, res) {
    // #swagger.tags = ['login']
    // #swagger.description = 'Endpoint para logar na aplicação.'
    const {
      email, senha,
    } = req.body;

    const senhaCript = crypto.createHash('sha256').update(senha).digest('hex');

    const usuario = await Usuario.findOne({
      where: { email, senha: senhaCript }, attributes: { exclude: ['senha', 'token', 'created_at', 'updated_at'] },
    });
    if (!usuario) {
      res.status(401).json({ mensagem: 'Usuario não autorizado.' });
    } else {
      const token = jwt.sign({ usuario }, process.env.JWT_SECRET, { expiresIn: expirarToken * 60 });
      res.status(200).json({ token });
    }
  },
  verificarToken(req, res, next) {
    const token = req.headers.authorization;
    if (!token) return res.status(401).json({ auth: false, mensagem: 'Usuario não autorizado.' });

    const onlyToken = token.split(' ');

    jwt.verify(onlyToken[1], process.env.JWT_SECRET, (err, decoded) => {
      if (err) return res.status(500).json({ auth: false, mensagem: 'Ocorreu um erro na sua autorização.' });
      // Se tiver tudo ok, salva no req para usar posterior.
      req.userId = decoded.id;
      req.type = decoded.admin;
      return next();
    });

    return null;
  },
};
