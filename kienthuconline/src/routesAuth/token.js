const express = require('express');
const router = express.Router();
const tokenController = require ('../app/controllers/TokenController');

router.post('/', tokenController.index);


module.exports = router;