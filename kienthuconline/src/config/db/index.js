const dotenv = require("dotenv");
dotenv.config();
const mongoose = require ('mongoose')
async function connect() {
    try {
    await mongoose.connect(process.env.DB_LINK);
        console.log ('DB Connect successfully!!!')
    }
    catch(err) {
        console.log ('DB Connect failure!!!')
    }
}
module.exports = {connect};