var express = require('express');
var mongoose = require('mongoose');
var app = express();
var bodyParser = require('body-parser');
var passport = require('passport');
var cookieParser = require('cookie-parser');
var User1 = require('./User');
var session = require('express-session');
var User = require('mongoose').model('User');

app.engine('html', require('ejs').__express);
app.set('view engine', 'html');

app.get('/', function (req, res) {
  res.render('index');
});

app.use(express.static('public'));

app.get('/browse', function (req, res) {
   var women = User1.getAllUsers(function (err) {
    if(err) {
      console.log(err);
    }
   });
   results = [];
   women.exec(function (err, wo) {
    if(err) {
      return console.log(err);
    }
    wo.forEach(function (doc) {
      results.push(doc);
    });
    res.render('browse');
   });
});

app.get('/create', ensureAuthenticated, function (req, res) {
  res.render('create', {user: req.user});
});

app.use(cookieParser());
app.use(session({
  secret: 'keyboard cat',
  resave: true,
  saveUninitialized: true
}));
app.use(bodyParser.urlencoded({
    extended:true
}));
app.use(bodyParser.json());
app.use(passport.initialize());
app.use(passport.session());

app.post('/create', function (req, res) {
  User1.addUser(req.body.firstName, req.body.lastName, req.body.email, req.body.major, req.body.year, req.body.school,
    req.body.hometown, req.body.coursesTaken, req.body.coursesCurr, req.body.involve, req.body.interests, function(err) {
      if(err) {
        console.log(err);
      } else {
        res.redirect('/browse');
      }
  });
});

app.get('/about', function (req, res) {
  res.render('about');
});

app.set('port', process.env.PORT || 3000);

app.listen(app.get('port'), function() { 
  console.log('listening');
});


var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
passport.use(new GoogleStrategy({
    clientID: '517619158501-4u1dm2gm7kk791p0rjbtkdifd5l2i6j1.apps.googleusercontent.com',
    clientSecret: 'qzcFGo75CuiI3V84fx4KC791',
    callbackURL: "http://localhost:3000/auth/google/callback"
  },
  function(accessToken, refreshToken, profile, done) {
    return done(null, profile);
  }));

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(obj, done) {
  done(null, obj);
});


// Use the GoogleStrategy within Passport.
//   Strategies in Passport require a `verify` function, which accept
//   credentials (in this case, an accessToken, refreshToken, and Google
//   profile), and invoke a callback with a user object.

app.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'], hd: 'upenn.edu' }));

// GET /auth/google/callback
//   Use passport.authenticate() as route middleware to authenticate the
//   request.  If authentication fails, the user will be redirected back to the
//   login page.  Otherwise, the primary route function function will be called,
//   which, in this example, will redirect the user to the home page.
app.get('/auth/google/callback', 
  passport.authenticate('google', { failureRedirect: '/authenticate' }),
  function(req, res) {
    session.isAuthenticated = true;
    res.redirect('/create');
});

app.get('/authenticate', function (req, res) {
  res.render('authenticate');
});

function ensureAuthenticated(req, res, next) {
  if (session.isAuthenticated) { 
    next(); 
  } else {
    res.redirect('/authenticate');
  }
}

app.get('/logout', function (req, res) {
  session.isAuthenticated = false;
  req.logout();
  res.redirect('/create');
});