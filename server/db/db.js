const Sequelize = require("sequelize")
//initialize your db, don't forget to include the possible heroku database URL
// create db in command line and rename / change postgres URL
const acme = new Sequelize('postgres://localhost/acme', {
    logging: false
});
// if deployed
// const acme = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost/acme', {
//     logging: false
// });

//export your db
