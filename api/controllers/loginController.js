const db = require('../models')

class LoginController {
    static async login(req,res){
        res.status(200).json({ msg: " yes "})
    }
}

module.exports = LoginController