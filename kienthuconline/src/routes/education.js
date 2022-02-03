const express = require('express');
const router = express.Router();
const educationController = require ('../app/controllers/EducationController');

router.get ('/params', educationController.show);
router.get ('/', educationController.index);
module.exports = router;