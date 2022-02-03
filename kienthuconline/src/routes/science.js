const express = require('express');
const router = express.Router();
const scienceController = require ('../app/controllers/ScienceController');

router.get ('/params', scienceController.show);
router.get ('/', scienceController.index);
module.exports = router;