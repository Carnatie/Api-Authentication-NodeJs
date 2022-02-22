const database = require('../models')

class UserController {
    // Create
    static async createUser(req, res) {
        const newUser = req.body
        try {
            const creatingUser = await database.Users.create(newUser)
            return res.status(200).json(creatingUser)
        } catch (error) {
            return res.status(500).json(error)
        }
    }
    // Read
    static async seeAllUsers(req, res) {
        try {
            const seeUser = await database.Users.findAll()
            return res.status(200).json(seeUser)
        } catch (error) {
            return res.status(500).json(error)
        }
    }
    static async seeOneUser(req, res) {
        const { id } = req.params
        try {
            const seeOneUser = await database.Users.findOne({
                where: {
                    id: Number(id)
                }
            })
            return res.status(200).json(seeOneUser)
        } catch (error) {
            return res.status(500).json(error)
        }
    }
    // Update
    static async updateUser(req, res) {
        const newInfo = req.body
        const { id } = req.params
        try {
            await database.Users.update(newInfo, {
                where: {
                    id: Number(id)
                },
                individualHooks: true
            })
            const updatedUser = await database.Users.findOne({
                where: {
                    id: Number(id)
                }
            })
            return res.status(200).json(updatedUser)
        } catch (error) {
            return res.status(500).json(error)
        }
    }
    // Delete
    static async deleteUser(req, res) {
        const { id } = req.params
        try {
            await database.Users.destroy({
                where: {
                    id: Number(id)
                }
            })
            return res.status(200).json({
                message: `User ${id} are deleted.`
            })
        } catch (error) {
            return res.status(500).json(error)
        }
    }
}

module.exports = UserController