const request = require('supertest')

const app = require('../../api')
const factory = require('../factories')
const truncate = require('../utils/truncate')

describe('Authenticantion', () => {
    beforeEach(async () => {
        await truncate()
    })

    it("should authenticate with valid credentials", async () => {
        const user = await factory.create('User', {
            password: '12345678'
        })

        const response = await request(app)
            .post("/login")
            .send({
                email: user.email,
                password: "12345678"
            })

        expect(response.status).toBe(200)
    })

    it("should return jwt token when authenticated", async () => {
        const user = await factory.create('User', {
            password: '12345678'
        })

        const response = await request(app)
            .post("/login")
            .send({
                email: user.email,
                password: "12345678"
            })

        expect(response.body).toHaveProperty("token")
    })
})