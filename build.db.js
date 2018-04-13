'use strict';

let models = require("./models");
let { beaches } = require("./seeders/data/beaches");
let { lifeguards } = require("./seeders/data/lifeguards");
let { tools } = require("./seeders/data/tools");
let { castles } = require("./seeders/data/castles");

models.sequelize.sync({ force: true })
    .then(() => {
        return models.Beach.bulkCreate(beaches);
    })
    .then(() => {
        return models.Lifeguard.bulkCreate(lifeguards);
    })
    .then(() => {
        return models.Tool.bulkCreate(tools);
    })
    .then(() => {
        return models.Castle.bulkCreate(castles);
    })
    .then(() => {
        process.exit();
    })
