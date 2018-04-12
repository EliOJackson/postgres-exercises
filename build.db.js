'use strict';

let models = require("./models");
let { beaches } = require("./seeders/data/beaches");
let { lifeguards } = require("./seeders/data/lifeguards");

models.sequelize.sync({ force: true })
    .then(() => {
        return models.Beach.bulkCreate(beaches);
    })
    .then(() => {
        return models.Lifeguard.bulkCreate(lifeguards);
    })
    .then(() => {
        process.exit();
    })
