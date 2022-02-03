const express = require('express');
const router = express.Router();
const logoutController = require ('../app/controllers/LogoutController');
const verifyToken = require('../middleware/auth')

router.delete('/', logoutController.index);


module.exports = router;