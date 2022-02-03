const User = require("../models/Users");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const generateTokens = require("../../middleware/generateTokens")
const updateRefreshToken = require("../../middleware/updateRefreshToken")


class TokenController {
  index(req, res) {
    const refreshToken = req.body.refreshToken
    console.log(refreshToken)
	if (!refreshToken) return res.sendStatus(401)

	User.find({refreshToken: refreshToken})
    .then(user => {
        if(user.length ===0) {
            return res.sendStatus(403)
        } else {
            try {
                jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET)
        
                const tokens = generateTokens(user[0])
                updateRefreshToken(user[0].email, tokens.refreshToken)
        
                res.json(tokens)
            } catch (error) {
                console.log(error)
                res.sendStatus(403)
            } 
        }
    })
	

	

 
}
create(req, res, next) {}
}

module.exports = new TokenController();
