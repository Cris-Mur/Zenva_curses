const { request } = require('express');
const passport = require('passport');
const localStrategy = require('passport-local');

// handle user registration
passport.use('singup', new localStrategy.Strategy({
  usernameField: 'email',
  passwordField: 'password',
  passReqToCallback: true,
}, (request, email, password, done) => {
  console.log(email, password);
  console.log(request.body);

  const { username } = request.body;
  if (username && username !== 'error') {
    return done(null, {name: 'joe'});
  } else {
    return done(new Error('invalid user'));
  }
}));

// hadle user login
passport.use('login', new localStrategy.Strategy({
  usernameField: 'email',
  passwordField: 'password',
}, (email, password, done) => {
  if (email !== 'joe@test.com') {
    return done(new Error('User not found'), false);
  }
  
  if (password !== 'test') {
    return done(new Error('Invalid password'), false);
  }

  return done(null, {name: 'joe'});
}));