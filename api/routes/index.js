const bodyParser = require('body-parser')

const users = require('../routes/user')
const login = require('../routes/login')


module.exports = app => {
    app.use(bodyParser.json())
    app.use(users)
    app.use(login)
}