const express = require('express');

const router = express.Router();

const RespostaController = require('../controllers/RespostaController');

router.post('/', RespostaController.create); // Id do usuario

module.exports = router;
