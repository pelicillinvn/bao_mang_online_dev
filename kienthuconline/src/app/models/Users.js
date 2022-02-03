const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = new Schema({
    fullname: { type: String,},
    email: { type: String,},
    password: { type: String,},
    roles: {type: String, default: 'BASIC'},
    loginAt: { type: Date, },
    logoutAt: { type: Date, },
    action: { type: String, },
    refreshToken: {type:String, default:'null'}
    
})

// login.index({ first: 1, last: -1 }) Nơi đánh index
module.exports = mongoose.model( 'User', User)