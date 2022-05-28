const express = require('express');

const router = express.Router();

const EventoController = require('../controllers/EventoController');

router.get('/', EventoController.getAll); // Id do usuario
router.post('/:id', EventoController.create); // Id do usuario
router.get('/:id', EventoController.eventosUsuario); // Id do usuario
router.get('/detalhes/:id', EventoController.eventoId); // Id do evento

module.exports = router;
