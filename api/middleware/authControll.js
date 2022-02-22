const jwt = require("jsonwebtoken")

module.exports = (req, res, next) => {

    try {
        const token = req.header.authorization.split(' ')[1]
        const decode = jwt.verify(req.body.token, 'c068a6cf-1ae4-40c1-a455-e8a8a2da6fa0')
        req.user = decode
        next()
    } catch (error) {
        return res.status(401).json({ msg: 'Token not allowed!'})
    }
}