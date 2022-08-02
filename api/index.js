require("dotenv").config({
    path: process.env.NODE_ENV === "test" ? ".env.test" : ".env"
})

const express = require('express')
const session  = require('express-session')
const routes = require('./routes/index')
const passport = require('passport')

const app = express()
const port = 3300

require('./services/passport')
require('./routes/index')


app.use(session({
    secret: 'project-session',
    resave: true,
    saveUninitialized:true
}))

app.use(passport.initialize())
app.use(passport.session())

routes(app)
if (process.env.NODE_ENV !== 'test') {
    app.listen(port, () => console.log(`Listening on port ${port}`))
}

module.exports = app