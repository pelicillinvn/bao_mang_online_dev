const express = require('express');
const router = express.Router();
const financeController = require ('../app/controllers/FinanceController');

router.get ('/params', financeController.show);
router.get ('/', financeController.index);
module.exports = router;