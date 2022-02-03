const PostView = require('../models/Posts');

const {mongooseToObject} = require ('../../util/mongooes');
const {mutipleMongooseToObject} = require ('../../util/mongooes')

class PostController {

    index (req, res,next) {
       
        Promise.all([ PostView.findOne({slug: req.params.slug}),PostView.find().sort({count: -1})])
        .then(values => {
              //var posts = values[0];
              const  postView = mongooseToObject(values[0]);
            
              const postsRight_view = mutipleMongooseToObject(values[1]);
           var arr = [postView , postView.count,postView.field,postsRight_view];
             // var postsField = postsRight_view.slice(1,7);
             // res.render('post', {  postView: mongooseToObject(values[0]),postsField: postsField });
              return  arr;
        })
        .then(Linhxinhgai => {
           
           
            const co = Linhxinhgai[1];
            const postsMaxView = Linhxinhgai[3].slice(0,7);
            PostView.find({field: Linhxinhgai[2]})
            .then(posts => {
                const postsField = mutipleMongooseToObject(posts).slice(0,6);
                res.render('post', {  postView: Linhxinhgai[0],postsField: postsField, postsMaxView:postsMaxView });
                return postsField;
            })
            .catch(error => console.log(error))
           
           // PostView.findOneAndUpdate({slug: req.params.slug}, {count: cou});
            PostView.findOneAndUpdate({slug: req.params.slug}, {count: co +1})
        .then(value=>{
            console.log(value);
            
        })
        .catch(error=>console.log(error))
        })
       
    //     .catch(error => next(error));
    //     }
      
    //     PostView.findOne({slug: req.params.slug})
    //     .then(post => {
          
         
    //         res.render('post',{ postView: mongooseToObject(post)});
    //         return mongooseToObject(post).count;
    //     })
    //    .then(Linhxinhgai => PostView.updateOne({slug: req.params.slug}, {count: Linhxinhgai +1}))
    //     .catch(error => next(error));
    //    res.send( req.params.slug)
    

    }
   
}


module.exports = new PostController;