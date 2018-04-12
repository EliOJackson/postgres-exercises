let sequelize = require('sequelize');
let queryInterface = require('sequelize/lib/query-interface');

let createdb = (queryInterface) => {
    const app = require('./app'); //make sure you are exporting app after attaching the necessary pieces in app.js!
    const models = app.get('models');
    return models.sequelize.sync({ force: true })
        .then((queryInterface) => {
            //soon we will include how to add stuff to the tables here!
        })
        .catch((err) => {
            console.log("oh noes!", err);
        })
}
//don't forget to actually call the function. Or, bonus, rewrite it as an iife.
createdb(queryInterface);