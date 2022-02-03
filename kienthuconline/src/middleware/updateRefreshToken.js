const User = require("../app/models/Users");
const dotenv = require("dotenv");
dotenv.config();

const updateRefreshToken = (useremail, refreshToken) => {
    User.findOneAndUpdate({ email: useremail },{refreshToken: refreshToken})
    .then(user => {
      console.log('updateUser:',user)
      return user;
    })
    .catch(error => {
      console.log(error)
    }) 
  }
  module.exports = updateRefreshToken;