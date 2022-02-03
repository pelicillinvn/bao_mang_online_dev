const express = require('express')
const app = express()
const cors = require('cors')
const morgan = require('morgan')
const path = require('path');
const handlebars = require('express-handlebars');
const { Router } = require('express');
const route = require('./routes');
const cookieParser = require('cookie-parser');

const dotenv = require("dotenv");
dotenv.config();

const cloudinary = require('cloudinary').v2;
// cloudinary.uploader.upload_stream(
//   { agent: myAgent },
//   function(error, result) { console.log(result); }
// );
cloudinary.config ({ 
  cloud_name :  process.env.CLOUD_URL, 
  api_key :  process.env.API_KEY, 
  api_secret : process.env.API_SECRET,
  secure : true 
});

const db = require('./config/db')
db.connect();
app.use(cookieParser());
app.use(express.json())
app.use(express.urlencoded({extended:true}));
app.use(morgan('combined'))
app.use(cors())

app.engine(
  'hbs',
  handlebars({
      extname: '.hbs',
  }),
);

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

app.use(express.static(path.join(__dirname, 'public')));


route (app);







app.listen(process.env.PORT, () => {
  console.log(`Example app listening at http://localhost:${process.env.PORT}`)
})