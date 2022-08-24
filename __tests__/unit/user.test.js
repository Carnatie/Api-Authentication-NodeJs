const bcrypt = require('bcrypt')
const request = require('supertest')
const faker = require('faker')

const app = require('../../api')
const truncate = require('../utils/truncate')
const factory = require('../factories')

describe('User', () => {
    beforeEach(async () => {
        await truncate()
    })

    it("should encrypt user password", async () => {
        const user = await factory.create('User', {
            password: '12345678'
        })

         expect(await bcrypt.compare('12345678', user.password)).toBe(true)

    })
})