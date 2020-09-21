const db = require('./db')
const Ingredient = require('./models/Ingredient')
const syncAndSeed = require('./seed')

module.exports = {
    db, Ingredient, syncAndSeed
}