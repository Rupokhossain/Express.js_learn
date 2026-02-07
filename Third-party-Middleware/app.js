const express = require("express");
const app = express();
const morgan = require("morgan");

app.use(morgan("dev"));


app.get("/", (res, req) => {
    res.send("Hello World");
});

app.get("/about", (res, req) => {
    res.send("About Page");
});



module.exports = app;