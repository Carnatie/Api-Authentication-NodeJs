require("dotenv").config({
    path: process.env.NODE_ENV === "test" ? ".env.test" : ".env"
})

const express = require('express')
const session  = require('express-session')
const routes = require('./routes/index')
const passport = require('passport')

const app = express()
const port = 3000

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
app.listen(port, () => console.log(`App listening on port ${port}!`))

module.exports = app