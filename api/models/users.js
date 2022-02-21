'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    static associate(models) {}
  }
  Users.init({
    username: {
      type: DataTypes.STRING,
      validate:{
      userLenght: function (dado) {
        if (dado.length <= 3) throw new Error('The username field must be longer than 3 characters')
      },}
    },
    email: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true,
        isEmail: {
          args: true,
          msg: `Email does not meet requirements!`
        },
        unique: {
          args: true,
          msg: 'Email address already in use!'
        }
      }
    },
    hashedPassword: DataTypes.STRING,
    password: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true,
        len: {
          args: [8, 16],
          msg: "A senha informada deve ter entre 8 e 16 caracteres!"
        },
      }
    }
  }, {
    sequelize: sequelize,
    modelName: 'Users',
  });
  return Users;
};