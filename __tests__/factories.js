const factory = require('factory-girl').factory
const { Users } = require('../api/models')
const faker = require('faker')

factory.define('User', Users, {
    username:faker.name.findName(),
    email:faker.internet.email(),
    password: faker.internet.password()
})

module.exports = factory