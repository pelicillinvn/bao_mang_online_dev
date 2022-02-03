const jwt = require('jsonwebtoken')
const dotenv = require("dotenv");
dotenv.config();


const verifyToken = (req, res, next) => {
	console.log('req.cookies',req.cookies)
	const token = req.cookies.Authorization;
	console.log('tokenAuthorization',token)
	// const token = authHeader && authHeader.split(' ')[1]
	// console.log('authHeader:',authHeader)
	// console.log('token:',token)
	
	if (!token) {
		
		return res.redirect("/dang-nhap")

	} else {
		try {
			const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)
			console.log('decoded',decoded)
			req.id = decoded.id
			//truyền thêm thông số id cho req để lấy ra dữ liệu tương ứng user
			
			next()
		} catch (error) {
			console.log(error)
			res.redirect("/dang-nhap")
				
			return res.sendStatus(403)
		}
	}
	
}

module.exports = verifyToken