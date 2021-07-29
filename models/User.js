const {Sequelize, DataTypes, Model} = require('sequelize')
const {sequelize} = require('../db')

class User extends Model {}

User.init({
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    // cart: {
    //     brand: [],
    //     chocolate: 6
    // } // brand -> flavor(price) *

}, {
    sequelize,
    timestamps: false,
});

module.exports = {User};