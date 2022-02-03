const multipart = require('connect-multiparty');
const multipartMiddleware = multipart();
const express = require('express');
const router = express.Router();

const uploadController = require ('../app/controllers/UploadController');

router.post ('/', multipartMiddleware, uploadController.index);
module.exports = router;
