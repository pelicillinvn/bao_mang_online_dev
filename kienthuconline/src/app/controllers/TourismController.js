const Post = require('../models/Posts')
const User = require('../models/Users')
const {mutipleMongooseToObject} = require ('../../util/mongooes')
const {mongooseToObject} = require ('../../util/mongooes')

class TourismController {
    index (req, res,next) {
        //console.log('req.cookiestec',req.cookies)
        var page = req.query.page;
        var pageSize = 8;
        if(page) {
            page = parseInt(page)
            if(page < 1) {
                page = 1;
            }
            var skipPost = (page -1 )* pageSize ;
            Post.find({field: 'du-lich' }).sort({createdAt: -1})
            .skip(skipPost)
            .limit(pageSize)
            .then(technology =>
                res.json(technology))
        } else {
            if(!req.id) {
            Promise.all([ Post.find({field:'du-lich' }),Post.find({field:'du-lich' }).sort({count: -1}), Post.find({})])
            .then(values => {
             
              const newTechnologies = mutipleMongooseToObject(values[0]).reverse();
              const posts = newTechnologies[0];
              const postLine_1= newTechnologies.slice(0,3);
              const postLine_2= newTechnologies.slice(3,6);
              const postLine_3= newTechnologies.slice(6,15);
              const postsTechnologhy_view = mutipleMongooseToObject(values[1]).slice(0,7);
              const postsCare = mutipleMongooseToObject(values[2]).slice(0,7);
              res.render('pages/tourism', { 
                postLine_1:postLine_1,
                postLine_2:postLine_2,
                postLine_3:postLine_3, 
                postsTechnologhy_view: postsTechnologhy_view,
                postsCare: postsCare,
             });
            })
       
            .catch(err=> res.status(500).json('Sever lỗi'))
            } else {
                Promise.all([ Post.find({field:'du-lich' }),Post.find({field:'du-lich' }).sort({count: -1}), Post.find({}), User.findOne({id: req.id})])
                .then(values => {
                 
                  const newTechnologies = mutipleMongooseToObject(values[0]).reverse();
                  const posts = newTechnologies[0];
                  const postLine_1= newTechnologies.slice(0,3);
                  const postLine_2= newTechnologies.slice(3,6);
                  const postLine_3= newTechnologies.slice(6,15);
                  const postsTechnologhy_view = mutipleMongooseToObject(values[1]).slice(0,7);
                  const postsCare = mutipleMongooseToObject(values[2]).slice(0,7);
                  const user = mongooseToObject(values[3]);
                  res.render('pages/tourism', { 
                    postLine_1:postLine_1,
                    postLine_2:postLine_2,
                    postLine_3:postLine_3, 
                    postsTechnologhy_view: postsTechnologhy_view,
                    postsCare: postsCare,
                    user: user,
                 });
                 
            })
           
                .catch(err=> 
                    res.status(500).json('Sever lỗi'))
                
            }
            
        }
       
    }

    show (req, res) {
        res.send(':slug');
    }
}

module.exports = new TourismController;