const express = require("express")
const path = require('path')
const app = express()
const morgan = require('morgan')
const { db, Ingredient, syncAndSeed } = require('./db')

app.use(morgan('dev'))
app.use(express.json())
app.use('/public', express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => res.sendFile(path.join(__dirname, '/public/index.html')))

app.get('/api/ingredients', async (req, res, next) => {
    try {
        const ingredients = await Ingredient.findAll()
        res.send(ingredients)
    } catch (err){
        next(err)
    }
})

app.get('/api/ingredients/:id', async (req, res, next) => {
    try {
        const ingredient = await Ingredient.findByPk(req.params.id)
        res.send(ingredient)
    } catch(err){
        next(err)
    }
})

const PORT = 3000

const init = async function(){
    await syncAndSeed()
    app.listen(PORT, function(){
        console.log(`Server is listening on port ${PORT}`)
    })
}
// For Deployment
// const init = async function(){
//     await syncAndSeed()
//     app.listen(process.env.PORT || PORT, function(){
//         console.log(`Server is listening on port ${PORT}`)
//     })
// }

init()
