const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

const generateTokens = (payload) => {
    const { id, email } = payload;
  
    // Create JWT
    const accessToken = jwt.sign(
      { id, email },
      process.env.ACCESS_TOKEN_SECRET,
      {
        expiresIn: "15m",
      }
    );
  
    const refreshToken = jwt.sign(
      { id, email },
      process.env.REFRESH_TOKEN_SECRET,
      {
        expiresIn: "12h",
      }
    );
  
    return { accessToken, refreshToken };
  };
  module.exports = generateTokens;