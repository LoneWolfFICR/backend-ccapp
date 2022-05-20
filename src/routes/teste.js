const express = require('express');
const Usuario = require('../models/Usuario');

const router = express.Router();

router.get('/', (req, res) => {
  const usuario = new Usuario();
  usuario.id = '12213-323212-3112';
  usuario.name = 'Augusto Almeida';
  usuario.email = 'augustalmeid@gmail.com';
  usuario.password = '123456';
  usuario.token = 'umtokenqualquer';
  usuario.isAdmin = true;
  res.status(200).send(usuario);
});

module.exports = router;
