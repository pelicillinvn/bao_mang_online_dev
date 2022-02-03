const User = require("../models/Users");
const bcrypt = require("bcrypt");
class RegisterController {

  index(req, res, next) {

    if (req.method === "GET") {
      if(!req.id) {
        return res.render("register");
      } else {
        User.find({ id: req.id })
        .then((user) => {
          res.render("register", {user: user});
      })
        .catch((erro) => console.log(erro))
      }
    }

    if (req.method === "POST") {
      // return res.json(req.body.fullname)
      // // const user = await userModel.getUser(username);
      // // if (user) res.status(409).send('Tên tài khoản đã tồn tại.');
      // // else {
      const SALT_ROUNDS = bcrypt.genSaltSync(10);

      const hashPassword = bcrypt.hashSync(req.body.password, SALT_ROUNDS);
      const registerData = req.body;
      registerData.password = hashPassword;
      // registerData.fullname = nameLower;
      const user = new User(registerData);
      // login.save()
      // .then(() => res.redirect('/'))
      // .catch(error => {
      //   next(error);
      // })

      User.find({ email: user.email })
        .then((value) => {
          console.log(value);
          if (value.length === 0) {
            console.log("true");
            return true;
          } else {
            console.log("false");
            return false;
          }
        })
        .then((isBoolean) => {
          if (isBoolean === false) {
            res.status(400).send("Email đã được sử dụng, vui lòng thử lại.");

            console.log("Email đã được sử dụng, vui lòng thử lại.");
          } else {
            user.save();
            res.redirect("/");

            //       var string = encodeURIComponent(process.env.LINK);
            // res.redirect('/?valid=' + string);
          }
        })
        .catch((err) => {
          next(err);
        });
    }

    
  }

  create(req, res, next) {}
}

module.exports = new RegisterController();
