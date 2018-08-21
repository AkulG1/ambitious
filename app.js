var express = require('express');
var app = express();
var url = require('url');
var port = process.env.PORT || 3000;
var bodyParser = require('body-parser');
var passport = require('passport');
var flash = require('connect-flash');
var morgan = require('morgan');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var configDB = require('./config/database.js');

var userroute = require('./routes');

// 

// require('./config/passport')(passport); // pass passport for configuration

// set up our express application
app.use(morgan('dev')); // log every request to the console
app.use(cookieParser()); // read cookies (needed for auth)
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());


require('./config/passport')(passport); // pass passport for configuration



// 


app.use('/assets', express.static(__dirname + '/public'));

app.set('view engine', 'ejs')

app.use(session({
    secret: 'imnotsurewhatthisisforlol',
    resave: true,
    saveUninitialized: true
})); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session

// routes ======================================================================


app.use(userroute);
console.log("App Listening at port:" + port);
app.listen(port);