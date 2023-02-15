const express = require("express");
const router = require("./routes/router");

const cookieParser = require('cookie-parser');
const session = require('express-session');
const flash = require('express-flash');
const passport = require("./libs/passport");
const passportJwt = require("./libs/passport-jwt");

const app = express();
const port = 3000;

app.use(express.static('./src/assets'));
app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));

app.use(cookieParser());
app.use(flash());
app.use(session({
  secret: 'secretkey',
  resave: false,
  saveUninitialized: false
}));

// LocalStrategy
app.use(passport.initialize());
app.use(passport.session());

// JWT
app.use(passportJwt.initialize());

// view engine setup
app.set('view engine', 'ejs');
app.set('views', './src/views')

app.use(router);
app.listen(port, () => {
    console.log(`Server up on server ${port}!`);
});