const express = require('express');
const router = express.Router();
const technologyController = require ('../app/controllers/TechnologyController');

router.get ('/params', technologyController.show);
router.get ('/', technologyController.index);
module.exports = router;