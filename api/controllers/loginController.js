const db = require('../models')
const jwt = require('jsonwebtoken')


class LoginController {
    static async login(req, res) {
        const {
            email
        } = req.body
        const userWithEmail = await db.Users.findOne({
            where: {
                email: email
            }
        })

        const token = jwt.sign({
            id: userWithEmail.id,
            email: userWithEmail.email
        }, 'c068a6cf-1ae4-40c1-a455-e8a8a2da6fa0', {
            expiresIn: '2 days'
        })

        return res.json({
            auth: true,
            token: token
        })

    }
}

module.exports = LoginController