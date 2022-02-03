const User = require("../models/Users");
const updateRefreshToken = require("../../middleware/updateRefreshToken")

class LogoutController {
  index(req, res, next) {
      console.log('req.id',req.id)
      User.findOne({id : req.id})
    .then(user => {
        updateRefreshToken(user.email, null)
        res.json(user)
	res.sendStatus(204)
    })
	.catch(error => {
        console.log(error)
    })

 
}
create(req, res, next) {}
}

module.exports = new LogoutController();
