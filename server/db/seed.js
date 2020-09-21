const db = require('./db')
const Ingredient = require('./models/Ingredient')

const syncAndSeed = async() => {
    await db.sync({force: true})
    const [] = await Promise.all([
        Ingredient.create({
            name: 'tortilla'
        }),
        Ingredient.create({
            name: 'rice'
        }),
        Ingredient.create({
            name: 'beans'
        })
    ])
}

module.exports = syncAndSeed