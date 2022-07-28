const {
    Router
} = require('express')
const passport = require('passport')
require('../services/passport')

const LoginController = require('../controllers/loginController')

const router = Router()
router
    .post('/login', passport.authenticate('local'), LoginController.login)

module.exports = router