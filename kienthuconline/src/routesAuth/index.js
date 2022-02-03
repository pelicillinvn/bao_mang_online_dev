const registerRouter = require('./register');
const loginRouter = require('./login');
const tokenRouter = require('./token');
const logoutRouter = require('./logout');


function routeAuth(app) {

    app.use('/dang-ky', registerRouter)
    app.use('/dang-nhap', loginRouter)
    app.use('/token', tokenRouter)

    app.use('/dang-xuat', logoutRouter)

}
module.exports = routeAuth;