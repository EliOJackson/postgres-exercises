"use strict";
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.set("models", require("../models"));
const models = app.get("models");
const { Beach } = app.get("models");

module.exports.getAllBeaches = () => {
    Beach.get("/beaches", (req, res, next) => {
        Beach.findAll({
            include: [{ model: Lifeguard }]
        })
            .then(beaches => {
                res.status(200).json(beaches);
            });
    });
};