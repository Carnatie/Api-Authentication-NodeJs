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

    it("should be not able to acess private routes", async () => {
        const response = await request(app)
            .get('/users')

        expect(response.status).toBe(401)
    })

    it("should be able to acess private routes when authenticated", async () => {
        const user = await factory.create('User', {
            password: '12345678'
        })

        const response = await request(app)
            .post("/login")
            .send({
                email: user.email,
                password: "12345678"
            })
        await request(app)
            .get('/users')
            .set('Authorization', `Bearer ${response.body.token}`)

        expect(response.status).toBe(200)
    })
})