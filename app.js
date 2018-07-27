var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
var bodyParser = require('body-parser')
app.use('/assets', express.static(__dirname + '/public'));

app.set('view engine', 'ejs')
app.get('/', function (req, res) {
    res.render('mainpage');
});

app.get('/login',function(req,res){
    res.render('login');
})

app.get('/signup',function(req,res){
    res.render('signup');
})

app.get('/bitsat',function(req,res){
    res.render('bitsat');
})

app.get('/aieee',function(req,res){
    res.render('aieee');
})

app.get('/ip',function(req,res){
    res.render('ip');
})

app.get('/jeemain',function(req,res){
    res.render('jeemain');
})

app.get('/jeeadvanced',function(req,res){
    res.render('jeeadvanced');
})


app.listen(port);