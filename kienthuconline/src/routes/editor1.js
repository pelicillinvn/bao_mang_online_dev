const express = require('express');
const router = express.Router();
const editorController = require ('../app/controllers/EditorController');
const app = express()

const fileUpload = require("express-fileupload");

app.use(
    fileUpload({
      createParentPath: true,
    })
  );
  router.post ('/upload',editorController.create );
  router.get ('/', editorController.index);
module.exports = router;