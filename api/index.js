const express = require('express')
const session  = require('express-session')
const routes = require('./routes/index')
const passport = require('passport')

const app = express()
const port = 3000

require('./auth/passport')

app.use(session({
    secret: 'project-session',
    resave: true,
    saveUninitialized:true
}))

app.use(passport.initialize())
app.use(passport.session())

require('./routes/index')

routes(app)
app.listen(port, () => console.log(`App listening on port ${port}!`))
