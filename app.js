var express = require('express');
var app = express();
var url = require('url');

var port = process.env.PORT || 3000;
var bodyParser = require('body-parser')
app.use('/assets', express.static(__dirname + '/public'));

app.set('view engine', 'ejs')
app.get('/', function (req, res) {
    res.render('mainpage');
});

app.get('/login', function (req, res) {
    res.render('login');
})

app.get('/signup', function (req, res) {
    res.render('signup');
})

app.get('/bitsat', function (req, res) {
    res.render('bitsat');
})

app.get('/aieee', function (req, res) {
    res.render('aieee');
})

app.get('/ip', function (req, res) {
    res.render('ip');
})

app.get('/jeemain', function (req, res) {
    res.render('jeemain');
})

app.get('/jeeadvanced', function (req, res) {
    res.render('jeeadvanced');
})

app.get('/jeemain/:year', function (req, res) {
    res.render(__dirname + '/views/jee_main/' + req.params.year);
});

app.get('/jeemain/:year/:paper', function (req, res) {
    var filename = req.params.paper.substr(0, 2) + 'April' + req.params.year
    var mor = req.params.paper.indexOf('Morning')
    var eve = req.params.paper.indexOf('Evening')
    if (mor !== -1) {
        filename = filename + req.params.paper.substr(mor, req.params.paper.length)

    }
    if (eve !== -1) {
        filename = filename + req.params.paper.substr(eve, req.params.paper.length);
    }
    res.download(__dirname + '/downloads/jee_main/' + req.params.year + '/' + filename + '.pdf')
});

app.get('/bitsat/:op', function (req, res) {
    res.render(__dirname + '/views/bitsat/' + req.params.op);
});

app.get('/bitsat/:op/:year', function (req, res) {
    res.download(__dirname + '/downloads/bitsat/' + req.params.op + '/' + req.params.year + '.pdf')
});



app.listen(port);