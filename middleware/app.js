const express = require("express");
const app = express();

//first middleware
/* app.use((req, res, next) => {
    console.log("Middleware 1: This always runs");
    next();
});

//second middleware
app.use((req, res, next) => {
    console.log("Middlewear 2: this also always runs");
    next();
});

//route handler
app.get("/", (req, res) => {
    res.send("Hello from Express!");
}); */

//practice example

/* const myFirstMiddleware = (req, res, next) => {
    console.log("Kew akjon amader server a dukse!");
    next();
}

app.use(myFirstMiddleware);

app.get("/", (req, res) => {
    res.send("Hello from Express with Middleware!");
});
 */



/* const myMiddleware = (req, res, next) => {
  console.log("Middleware function!");

  req.currentTime = new Date(Date.now());
  next();
};

app.get("/", myMiddleware, (req, res) => {
  console.log("I am home. " + req.currentTime);
  res.send("Hello from Express with Middleware!");
});
*/

/* app.use((req, res, next) => {
    req.userName = "Siam Ahmed";
    next();
});

app.get("/profile", (req, res) => {
    res.send(`Hello, ${req.userName}! Welcome to our Express server.`);
}); */


// check password middleware
/* const checkPassword = (req, res, next) => {
    const password = req.query.password;

    if(password === "12345") {
        next();
    } else {
        res.send("Wrong Password!");
    }
};

app.get("/secret", checkPassword, (req, res) => {
    res.send("Welcome to the secret area!");
}); */



// Time Logger Middleware
/*const timeLogger = (req, res, next) => {
    const currentTime = new Date().toLocaleTimeString();
    console.log(`[${currentTime}] - new request here.`);

    next();
};

// middleware app a connect kora
app.use(timeLogger);

app.get("/", (req, res) => {
    res.send("welcome to the home page!");
});

app.get("/about", (req, res) => {
    res.send("welcome to the about page!");
}); */



//  Age Filter Middleware
/* const checkAge = (req, res, next) => {
    const userAge = req.query.age;

    if(!userAge) {
        res.send("Please provide your age.");
    } else if(userAge < 18) {
        res.send("You must be 18 or older to access this content.");
    } else {
        next();
    }
};

app.get("/premium-movie", checkAge, (req, res) => {
    res.send("Welcome to the premium movie content!");
});
*/



// =============application level middleware example==================

/* app.use((req, res, next) => {
    console.log(`Request is comming: ${req.method} ${req.url}`);
    next();
});

app.get("/", (req, res) => {
    res.send("Welcome to the home page!");
}); */


// nirdisto route er jonno middleware
app.use("/admin", (req, res, next) => {
    console.log("Trying to logging");

    const isAdmin = req.query.admin === 'true';

    if(isAdmin) {
        next();
    } else {
        res.status(403).send("Access denied. Admins only.");
    }
});

app.get("/admin/dashboard", (req, res) => {
    res.send("Welcome to the Admin Dashboard!");
});

app.get("/admin/settings", (req, res) => {
    res.send("Welcome to the Admin Settings!");
});

app.get("/home", (req, res) => {
    res.send("Welcome to the Home Page!");
});





module.exports = app;
