const User = require('../models/Users');
const Post = require('../models/Posts');

const {mutipleMongooseToObject} = require ('../../util/mongooes');
const {mongooseToObject} = require ('../../util/mongooes');
class SiteController {

    index (req, res, next) {
    if(!req.id) {
        Promise.all([Post.find({}),Post.find().sort({count: -1})])
        .then(values => {
              var posts = values[0];
              const newPosts = mutipleMongooseToObject(posts).reverse();
              const newPost= newPosts[0];
              const post_s2 = newPosts.slice(1,7);
              const post_s3 = newPosts.slice(7,14);
              const postsRight_2 = newPosts.slice(14,21);
              var postsRight = values[1];
              const postsRight_1 = mutipleMongooseToObject(postsRight).slice(1,7);
              res.render('home', { newposts : newPost,post_s2:post_s2,post_s3:post_s3, postsRight_1: postsRight_1,postsRight_2: postsRight_2 });
        })
        .catch(error => next(error));
    } else {
        Promise.all([Post.find({}),Post.find().sort({count: -1}),User.findOne({id : req.id})])
        .then(values => {
              var posts = values[0];
              const newPosts = mutipleMongooseToObject(posts).reverse();
              const newPost= newPosts[0];
              const post_s2 = newPosts.slice(1,7);
              const post_s3 = newPosts.slice(7,14);
              const postsRight_2 = newPosts.slice(14,21);
              var postsRight = values[1];
              var user = mongooseToObject(values[2])
              console.log('user', user)
              const postsRight_1 = mutipleMongooseToObject(postsRight).slice(1,7);
              res.render('home', { newposts : newPost,post_s2:post_s2,post_s3:post_s3, postsRight_1: postsRight_1,postsRight_2: postsRight_2,user:user });
              //res.render('header-search', {user: user});
        })
        .catch(error => next(error));
    }
   
    }
    search(req, res, index) {
        console.log("keywword",req.body)
    }
   
}

module.exports = new SiteController;