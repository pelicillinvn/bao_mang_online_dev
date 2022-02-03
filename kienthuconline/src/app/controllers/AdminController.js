const Post = require('../models/Posts');
const path = require('path');
class AdminController {
    index (req, res,next) {
       // res.sendFile(path.join(__dirname+'../admin','index.html'));
        //res.sendFile('admin/index.html', {root: path.dirname(__dirname)});
        res.sendFile('index.html', { root: path.join(__dirname, '../../admin') });
        //res.render('admin/index');

       
    }
    create (req, res,next) {
      
    }
}
   


module.exports = new AdminController;