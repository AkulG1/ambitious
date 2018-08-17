var express = require('express');
var router = express.Router();
var passport = require('passport');

router.get('/login', function (req, res, next) {
    res.render('login', { message: req.flash('loginMessage') });
});

router.get('/', function (req, res) {
    res.render('mainpage');
});

router.get('/signup', function (req, res, next) {
    res.render('signup', { message: req.flash('signupMessage') });
});
// process the login form
router.post('/login', passport.authenticate('local-login', {
    successRedirect: '/profile', // redirect to the secure profile section
    failureRedirect: '/login', // redirect back to the signup page if there is an error
    failureFlash: true // allow flash messages
}));


// app.post('/signup', do all our passport stuff here);
router.post('/signup', passport.authenticate('local-signup', {
    successRedirect: '/profile', // redirect to the secure profile section
    failureRedirect: '/signup', // redirect back to the signup page if there is an error
    failureFlash: true // allow flash messages
}));
// =====================================
// PROFILE SECTION =====================
// =====================================
// we will want this protected so you have to be logged in to visit
// we will use route middleware to verify this (the isLoggedIn function)
router.get('/profile', isLoggedIn, function (req, res) {
    res.render('profile', {
        user: req.user // get the user out of session and pass to template
    });
});

// =====================================
// LOGOUT ==============================
// =====================================
router.get('/logout', function (req, res) {
    req.logout();
    res.redirect('/');
});
// };

// route middleware to make sure a user is logged in
function isLoggedIn(req, res, next) {

    // if user is authenticated in the session, carry on 
    if (req.isAuthenticated())
        return next();

    // if they aren't redirect them to the home page
    res.redirect('/');
}

router.post('/login', passport.authenticate('local-login', {
    successRedirect: '/profile', // redirect to the secure profile section
    failureRedirect: '/login', // redirect back to the signup page if there is an error
    failureFlash: true // allow flash messages
}));

router.get('/bitsat', function (req, res) {
    res.render('bitsat');
})

router.get('/aieee', function (req, res) {
    res.render('aieee');
})

router.get('/ip', function (req, res) {
    res.render('ip');
})

router.get('/jeemain', function (req, res) {
    res.render('jeemain');
})

router.get('/jeeadvanced', function (req, res) {
    res.render('jeeadvanced');
})

router.get('/jeemain/:year', function (req, res) {
    res.render(__dirname + '/views/jee_main/' + req.params.year);
});

router.get('/jeemain/:year/:paper', function (req, res) {
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

router.get('/bitsat/:op', function (req, res) {
    res.render(__dirname + '/views/bitsat/' + req.params.op);
});

router.get('/bitsat/:op/:year', function (req, res) {
    res.download(__dirname + '/downloads/bitsat/' + req.params.op + '/' + req.params.year + '.pdf')
});



module.exports = router;