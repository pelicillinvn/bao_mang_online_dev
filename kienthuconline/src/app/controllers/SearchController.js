const Post = require('../models/Posts')
const User = require('../models/Users')
const {mutipleMongooseToObject} = require ('../../util/mongooes')
const {mongooseToObject} = require ('../../util/mongooes')


class SearchController {
    index (req, res,next) {
      var keyWord = req.body.q;
       var page = req.query.page;
        var pageSize = 8;
        if(page) {
            page = parseInt(page)
            if(page < 1) {
                page = 1;
            }
            var skipPost = (page -1 )* pageSize ;
            //Post.stores.createIndex( { title: "text", description: "text" } )
//Post.dropIndex("description")

            Post.find({$text:{$search:keyWord}}).sort( { score: { $meta: "textScore" } } )
            .skip(skipPost)
            .limit(pageSize)
            .then((search) => {
                res.json(search);

            })
                
        } else {
            if(!req.id) {
            Promise.all([ Post.find({$text:{$search:keyWord}}).sort( { score: {date: 1, $meta: "textScore" } } ),Post.find({}).sort({count: -1}), Post.find({}), keyWord])
            .then(values => {
              const postSearch = mutipleMongooseToObject(values[0]).slice(0,7);
              const postsView = mutipleMongooseToObject(values[1]).slice(0,7);
              const postsCare = mutipleMongooseToObject(values[2]).slice(0,7);
              const keyWord = values[3];
              console.log(keyWord);
              res.render('pages/search', { 
               
                postSearch: postSearch, 
                postsView: postsView,
                postsCare: postsCare,
                keyWord: keyWord,
             });
            })
       
            .catch(err=> res.status(500).json('Sever lỗi 1'))
            } else {
                Promise.all([Post.find({$text:{$search:keyWord}}).sort( { score: { date: 1,$meta: "textScore" } } ),Post.find({}).sort({count: -1}), Post.find({}), User.findOne({id: req.id}),keyWord])
                .then(values => {
                 
                const postSearch = mutipleMongooseToObject(values[0]).slice(0,7);
                const postsView = mutipleMongooseToObject(values[1]).slice(0,7);
                const postsCare = mutipleMongooseToObject(values[2]).slice(0,7);
                const user = mongooseToObject(values[3]);
                const keyWord = values[4];
                  res.render('pages/search', { 
                    postSearch: postSearch, 
                    postsView: postsView,
                    postsCare: postsCare,
                    user: user,
                    keyWord: keyWord,
                 });
                 
            })
           
                .catch(err=> 
                    res.status(500).json('Sever lỗi 2'))
                
            }
            
        }
    // Post.plugin(textSearch);
    // Post.index({ description: 'text' })
    // Post.stores.createIndex( { title: "text", description: "text" } )

    // Post.textSearch(keyWord, function (err, output) {
    //     if (err) return handleError(err);
     
    //     var inspect = require('util').inspect;
    //     console.log(inspect(output, { depth: null }));

    // Post.find({$text:{$search:keyWord}}).sort( { score: { $meta: "textScore" } } )
    // .then((search) => {
    //                 res.json(search);
    
    //             })
    //             .catch(erro => console.log(erro))
       
    //})
        
} 
   

    show (req, res) {
        res.render('pages/search');
    }
}

module.exports = new SearchController;