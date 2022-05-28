const express = require('express');

const router = express.Router();

const LoginController = require('../controllers/LoginController');

router.post('/', LoginController.login); // Id do usuario

module.exports = router;
