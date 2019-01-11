//3d. create the strategy in this file
const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const mongoose = require("mongoose");
const User = mongoose.model("users");
const keys = require("../config/keys");

//options contain where it's goning to extract the token and the secret string.
const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = keys.SecretOrKey;

module.exports = passport => {
  passport.use(
    //the JwtStrategy takes 2 things the options from above and a callback with payload that will contain the user information where that token resides.
    new JwtStrategy(opts, (jwt_payload, done) => {
      //get the user that is being sent in the token.
      User.findById(jwt_payload.id)
        .then(user => {
          if (user) {
            return done(null, user); //null place is if there is any error
          }
          return done(null, false);
        })
        .catch(err => console.log(err));
    })
  );
};
