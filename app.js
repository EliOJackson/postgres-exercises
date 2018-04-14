"use strict"; 

const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const routes = require("./routes/");


app.set("models", require("./models"));
const models = app.get("models");
const { Beach, Lifeguard, Tool, Castle } = app.get("models");

//middleware stack
app.use('/api/v1/', routes);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

app.post("/castletools", ({ body: { castle_id, tool_id } }, res, next) => {
    Tool.findById(tool_id)
    .then(foundTool => {
        foundTool.addToolUsed(castle_id)
        .then((newRecord) => {
            res.status(201).json(newRecord);
        });
    });
});

app.post("/beaches/lifeguards", ({ body: { lifeguard_id, beach_id } }, res, next) => {
    Lifeguard.findById(lifeguard_id)
    .then(foundLifeguard => {
        foundLifeguard.addLifeguardOnDuty(beach_id)
        .then((newRecord) => {
            res.status(201).json(newRecord);
        });
    });
});

app.delete("/beaches", ({ body: { beach_id }}, res, next) => {
    Beach.destroy({
        where: {
            id: beach_id
        }
    })
    .then(beaches => {
        res.status(200).json(beaches);
    })
});

module.exports = app;