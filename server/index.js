const express = require("express")
const path = require('path')
//initialize app
const app = express()
//require morgan|volleyball, path packages
const morgan = require('morgan')
//require db from /db


//use morgan|volleyball
app.use(morgan('dev'))
//use express.json()
app.use(express.json())
//use express.static() MAKE SURE THE PATH TO YOUR PUBLIC FOLDER IS RIGHT!
app.use('/public', express.static(path.join(__dirname, 'public')))
//app.use('/public', express.static(path.join(__dirname, 'server/public')))

//require in your routes and use them on your api path

//404 handler

//500 handler

//set PORT
const PORT = 3000

//listen
const init = async function(){
    //await syncAndSeed()
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
