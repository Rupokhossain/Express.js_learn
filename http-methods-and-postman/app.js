const express = require("express");
const app = express();

const userRouter = require("./routes/users.route.js");

app.use("api/user", userRouter);

app.use("/", (req, res) => {
   res.statusCode = 200;
   res.sendFile(__dirname + "/views/index.html");
});

// app.use("/register", (req, res) => {
//     res.status(200).json({
//         message: "I am register page",
//         statusCode: 200,
//     });
// });



// app.use("/users", (req, res) => {
//     res.send("Create a new users!");
// });


app.use("/profile", (req, res) => {
    const user = {
        id: 1, 
        name: "Siam ahmed",
        profession: "Developer"
    };

    res.json(user);
});

module.exports = app;