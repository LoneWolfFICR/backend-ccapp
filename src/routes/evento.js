const express = require('express');

const router = express.Router();

const EventoController = require('../controllers/EventoController');

router.post('/:id', EventoController.create); // Id do usuario

module.exports = router;
