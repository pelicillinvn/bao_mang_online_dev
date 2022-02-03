const express = require('express')
const app = express()
var cors = require('cors')
const morgan = require('morgan')
const path = require('path');
const handlebars = require('express-handlebars');
const jwt = require('jsonwebtoken')
const { Router } = require('express');
const routeAuth = require('./routesAuth/index');
const dotenv = require("dotenv");
dotenv.config();
const cookieParser = require('cookie-parser');
const db = require('./config/db')
const PORT = 4000;
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


routeAuth(app);






app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`)
})