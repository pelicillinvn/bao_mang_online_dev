const User = require("../models/Users");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const generateTokens = require("../../middleware/generateTokens")
const updateRefreshToken = require("../../middleware/updateRefreshToken")



class LoginController {
  index(req, res, next) {
    if (req.method === "GET") {
      return res.render("login");
    }
    if (req.method === "POST") {
      const useremail = req.body.email;
      const userpassword = req.body.password;

      User.find({ email: useremail })
        .then((user) => {
          if (user.length === 0) {
            return res.status(401).send("Email hoặc mật khẩu không đúng");
          } else {
            console.log(user[0]);
            const isPasswordValid = bcrypt.compareSync(
              userpassword,
              user[0].password
            );
            console.log(isPasswordValid);

            if (!isPasswordValid) {
              return res.status(401).send("Email hoặc mật khẩu không đúng");
            } else {
              const tokens = generateTokens(user[0]);
              updateRefreshToken(user[0].email, tokens.refreshToken);
              console.log(tokens);
            //   res.cookie('Authorization', tokens, {
            //     // maxAge: 365 * 24 * 60 * 60 * 100,
            //     httpOnly: true,
            //     //secure: true;
            // })
            
              return res.json(tokens);
             
            }
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }
  // setCookie(req, res) {
  //   console.log(req)
  //   res.cookie('Authorization', req.tokens);
  //   res.json({ok: 1})

  // }
 
}

module.exports = new LoginController();
