const passport = require("passport");
const User = require("../models/User");

const authenticate = passport.authenticate('local')

function loginUser(req,res) {
  authenticate(req, res, function () {
    console.log('Authenticated', req.user.username);
    console.log('session object:', req.session);
    console.log('req.user:', req.user);
    res.status(200);
    res.json(req.user);
  });
}

const logout = function(req, res) {
	req.logout();
	console.log("logged out user");
	console.log("session object:", req.session);
	console.log("req.user:", req.user);
	res.sendStatus(200);
}

const register = function (req, res) {
  User.register(new User({
    // email: req.body.username,
    username: req.body.username
  }), req.body.password, function (err) {
    if (err) {
      res.status(500);
      res.json({
        error: err
      });
    } else {
      // login
      loginUser(req,res);
    }
  });
};

function activeUserSession(req,res) {
  if(req.sessionID && req.user) {
      res.status(200);
      res.send(req.sessionID)
  }
  else {
      res.sendStatus(403);
  }
}


module.exports = {
  register,
  login: loginUser,
  logout,
  activeUserSession
};
