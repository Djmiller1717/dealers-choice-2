const Sequelize = require("sequelize")
//initialize your db, don't forget to include the possible heroku database URL
// create db in command line and rename / change postgres URL
const db = new Sequelize('postgres://localhost/dealers-choice', {
    logging: false
});
// if deployed
// const db = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost/dealers-choice', {
//     logging: false
// });

module.exports = db
