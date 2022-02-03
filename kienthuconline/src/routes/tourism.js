const express = require('express');
const router = express.Router();
const tourismController = require ('../app/controllers/TourismController');

router.get ('/params', tourismController.show);
router.get ('/', tourismController.index);
module.exports = router;