"use strict"; 

const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.set("models", require("./models"));
const models = app.get("models");
const { Beach, Lifeguard, Tool, Castle } = app.get("models");

//middleware stack
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

module.exports = app;


app.get("/beaches", (req, res, next) => {
    Beach.findAll({
        include: [{ model: Lifeguard }]
    })
        .then(beaches => {
            res.status(200).json(beaches);
        });
});


app.post("/castletools", ({ body: { beach_id, tool_id } }, res, next) => {

    Tool.findById(tool_id)
        .then(foundTool => {
            foundTool.addToolUsed(beach_id)
                .then((newRecord) => {
                    res.status(201).json(newRecord);
                });
        });
});