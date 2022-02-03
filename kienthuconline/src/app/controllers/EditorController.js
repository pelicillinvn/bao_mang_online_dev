const Post = require('../models/Posts');
const User = require('../models/Users');
const {mongooseToObject} = require ('../../util/mongooes');

class EditorController {
    index (req, res,next) {
      User.findOne({ id: req.id })
        .then((user) => {
          
          res.render('editor', {user: mongooseToObject(user)});
      })
        .catch((erro) => console.log(erro))
       
    }
    create (req, res,next) {
        
       const formData = req.body;
       
      const post = new Post (formData)
      post.save()
      .then(() => res.json('Upload thành công'))
      .catch(error => {
        next(error);
      })
    }
}
   


module.exports = new EditorController;