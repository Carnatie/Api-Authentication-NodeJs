const passport = require('passport')
const bcrypt = require('bcrypt')
const LocalStrategy = require('passport-local').Strategy

const db = require('../models')

passport.serializeUser(function (user, cb) {
    process.nextTick(function () {
        cb(null, {
            id: user.id,
            username: user.email
        });
    });
});

passport.deserializeUser(function (user, cb) {
    process.nextTick(function () {
        return cb(null, user);
    });
});


module.exports = passport.use(new LocalStrategy({
        usernameField: "email",
        passwordField: "password",
    },
    function (username, password, done) {
        db.Users.findOne({
                where: {
                    email: username
                }
            })
            .then(function (users) {
                if (!users) {
                    return done(null, false, {
                        msg: 'Incorrect username.'
                    });
                }
                const isValid = bcrypt.compareSync(password, users.password)
                if (!isValid) {
                    return done(null, false, {
                        msg: 'Incorrect password.'
                    });
                }
                return done(null, users);
            })
            .catch(err => done(err));
    }
))

console.log('passport is working')