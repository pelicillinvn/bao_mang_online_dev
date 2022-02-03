const registerRouter = require('./register');
const loginRouter = require('./login');
const technologyRouter = require('./technology');
const editorRouter = require('./editor1');
const siteRouter = require('./site');
const postRouter = require('./post');
const adminRouter = require('./admin');
const searchRouter = require('./search');
const financeRouter = require('./finance');
const tourismRouter  = require('./tourism');
const scienceRouter = require('./science');
const educationRouter = require('./education');
const verifyToken = require("../middleware/auth")
const userLogin = require("../middleware/user")


function route(app) {
    app.use('/dang-ky', registerRouter)
    app.use('/dang-nhap',userLogin, loginRouter)

    app.use('/cong-nghe',userLogin, technologyRouter)
    app.use('/tai-chinh',userLogin, financeRouter)
    app.use('/du-lich',userLogin, tourismRouter)
    app.use('/khoa-hoc',userLogin, scienceRouter)
    app.use('/giao-duc',userLogin, educationRouter)

    app.use('/admin/tao-bai-viet',verifyToken, editorRouter)
    
    app.use('/bai-viet',userLogin, postRouter)
    app.use('/tim-kiem',userLogin, searchRouter)

    app.use('/admin', verifyToken,adminRouter)
    app.use('/',userLogin, siteRouter)
}
module.exports = route;