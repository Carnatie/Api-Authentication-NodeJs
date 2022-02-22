const {
    Router
} = require('express')

const authControll = require('../middleware/authControll.js')
const UserController = require('../controllers/userController')



const router = Router()
router
    // Create
    .post('/users', UserController.createUser)
    // Read
    .get('/users', authControll, UserController.seeAllUsers)
    .get('/users/:id', authControll, UserController.seeOneUser)
    // Update
    .put('/users/:id', authControll, UserController.updateUser)
    // Delete
    .delete('/users/:id', authControll, UserController.deleteUser)

module.exports = router