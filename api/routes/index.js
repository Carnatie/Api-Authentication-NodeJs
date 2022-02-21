const bodyParser = require('body-parser')
const users = require('../routes/user')


module.exports = app => {
    app.use(bodyParser.json())
    app.use(users)
}