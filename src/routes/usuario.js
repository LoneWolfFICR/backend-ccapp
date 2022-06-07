const express = require('express');

const router = express.Router();

const UsuarioController = require('../controllers/UsuarioController');
const loginController = require('../controllers/LoginController');

router.post('/', UsuarioController.create);
router.get('/', loginController.verificarTokenAdmin, UsuarioController.getAll);
router.put('/', loginController.verificarToken, UsuarioController.update);
router.get('/myinfo', loginController.verificarToken, UsuarioController.myinfo); // Id no body

module.exports = router;
