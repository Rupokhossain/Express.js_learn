const express = require("express");
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded());

app.use(bodyParser.json());

app.get("/register", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});
app.post("/register", (req, res) => {
    // const { name, age } = req.body;

    const name = req.body.name;
    const age = req.body.age;

    res.send(`<h2>Your name is ${name} and age is ${age}</h2>`);
});

module.exports = app;