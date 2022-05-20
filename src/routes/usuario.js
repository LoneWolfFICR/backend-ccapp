const express = require('express');

const router = express.Router();

const UsuarioController = require('../controllers/UsuarioController');

router.post('/', UsuarioController.create);
router.get('/', UsuarioController.getAll);

module.exports = router;
