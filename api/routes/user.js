const { Router } = require('express')
const UserController = require('../controllers/userController')

const router = Router()
router
    // Create
    .post('/users', UserController.createUser)
    // Read
    .get('/users', UserController.seeAllUsers)
    .get('/users/:id', UserController.seeOneUser)
    // Update
    .post('/users/:id', UserController.updateUser)
    // Delete
    .delete('/users/:id', UserController.deleteUser)

module.exports = router