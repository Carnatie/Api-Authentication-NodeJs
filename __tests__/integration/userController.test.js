const request = require('supertest')
const faker = require('faker')

const factory = require('../factories')
const app = require('../../api')
const truncate = require('../utils/truncate')

describe('UserController', () => {
    beforeEach(async () => {
        await truncate()
    })

    it("should create a user", async () => {
        const response = await request(app)
            .post("/users")
            .send({
                username: faker.name.findName(),
                email: faker.internet.email(),
                password: faker.internet.password()
            })

        expect(response.status).toBe(200)
    })
})
