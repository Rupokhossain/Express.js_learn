const express = require("express");
const path = require("path");
const app = express();

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "views", "index.html"));
});

app.get("/contact", (req, res) => {
    const products = [
        {
            id: 101,
            name: "Mouse",
            price: 500
        },
        {
            id: 102,
            name: "Keyboard",
            price: 600
        },
    ];
    res.json(products);
});

app.listen(4000, () => {
    console.log("Server is running on port 4000");
});