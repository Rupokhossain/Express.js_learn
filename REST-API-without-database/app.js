const express = require("express");
const app = express();
const cors = require("cors");
const usersRouter = require("./routes/users.route");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use("/users", usersRouter);



// home route
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/index.html");
});


// route not found error
app.use((req, res) => {
    res.status(404).json({message: "route not found"});
});


// server error
app.use((err, req, res, next) => {
    res.status(505).json({message: "somthing broke"});
    next(err);
});






module.exports = app; 