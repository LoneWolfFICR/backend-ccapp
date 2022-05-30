const express = require('express');

const router = express.Router();

const AdminController = require('../controllers/AdminController');

router.post('/setadmin', AdminController.setAdmin);
router.post('/setsysadmin', AdminController.setSysAdmin);

module.exports = router;
