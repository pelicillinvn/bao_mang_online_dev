const express = require('express');
const router = express.Router();
const searchController = require ('../app/controllers/SearchController');

router.post ('/', searchController.index);
router.get ('/', searchController.show);
module.exports = router;