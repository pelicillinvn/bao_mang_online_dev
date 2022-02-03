const jwt = require('jsonwebtoken')
const dotenv = require("dotenv");
dotenv.config();
//const Post = require('../app/models/Posts');



const userLogin = (req, res, next) => {
	console.log('req.cookies',req.cookies)
	const token = req.cookies.Authorization;
	console.log('tokenAuthorization',token)
	// const token = authHeader && authHeader.split(' ')[1]
	// console.log('authHeader:',authHeader)
	// console.log('token:',token)
	
	if (token) {
		
			try {
			const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)
			console.log('decoded',decoded)
			req.id = decoded.id
			//truyền thêm thông số id cho req để lấy ra dữ liệu tương ứng user
			console.log('user id',req.id)
            // Post.findOne({id : req.id})
            // .then(user => {
            //     res.render('header-search',{user: user})
            // })
            // .catch(erro => console.log(erro))
			next()
			} catch (error) {
				console.log(error)
				next()

			}

	} else {
        next()
    }
	
}

module.exports = userLogin