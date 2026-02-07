const express = require("express");
const app = express();
const usersRouter = require("./routes/users.route");


app.use(express.urlencoded({extended: true}))
app.use("/users", usersRouter)

app.use((req, res, next) => {
    res.status(404).json({
        message: "resource not found",
    });
});

module.exports = app;