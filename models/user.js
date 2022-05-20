'use strict';
const {
  Model
} = require('sequelize');

const pokemon = require('./pokemon');

module.exports = (sequelize, DataTypes) => {

  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Pokemon.belongsTo(models.User);
    }
  }

  User.init({
    name: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING,
    balance: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};