const express = require('express');
const router = express.Router();
const loginerController = require ('../app/controllers/LoginController');

router.get ('/', loginerController.index);
module.exports = router;