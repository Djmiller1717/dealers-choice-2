const Sequelize = require("sequelize") //for things like Sequelize.STRING
const db = require('../db')

//define your model
const Ingredient = db.define('ingredient', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

//define any class or instance methods
module.exports = Ingredient
