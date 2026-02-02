const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
})
app.get("/circle", (req, res) => {
    res.sendFile(__dirname + "/circle.html");
})
app.get("/triangle", (req, res) => {
    res.sendFile(__dirname + "/triangle.html");
})


app.post("/triangle", (req, res) => {
    const height = req.body.height;
    const base = req.body.base;
    const area = 0.5 * base * height;
    res.send(`<h1>The area of the triangle is ${area}</h1>`);
})


app.post("/circle", (req, res) => {
    const radius = req.body.radius;
    const area = Math.PI * radius * radius;
    res.send(`<h1>The area of the circle is ${area}</h1>`);
})
module.exports = app;