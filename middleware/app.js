
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
/* app.use("/admin", (req, res, next) => {
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
}); */






// ===================Router-level Middleware====================

/*

// create router 
const adminRouter = express.Router();

// router level middleware
adminRouter.use((req, res, next) => {
    console.log("Admin router a ekti request esheche...");

    if(req.query.token === "12345") {
        next();
    } else {
        res.status(403).send("Apnar admin access nei!");
    }

});

// admin dashboard route
adminRouter.get("/dashboard", (req, res) => {
    res.send("Welcome to the Admin Dashboard!");
});

// admin settings route
adminRouter.get("/settings", (req, res) => {
    res.send("Welcome to the Admin Settings!");
});


app.use("/admin", adminRouter);

app.get("/home", (req, res) => {
    res.send("Welcome to the Home Page!");
});

*/



/* const userRouter = express.Router();

// router level middleware
userRouter.use((req, res, next) => {
    console.log("User router a ekti request esheche...");
    
    if(req.query.auth === "true") {
        next();
    } else {
        res.status(404).send("User authentication failed!");
    }
});


//user route 
userRouter.get("/profile", (req, res) => {
    res.send("Welcome to your profile page!");
});

userRouter.get("/orders", (req, res) => {
    res.send("Welcome to your orders page!");
});

app.use("/user", userRouter);

app.get("/home", (req, res) => {
    res.send("Welcome to the Home Page!");
});
 */



// =============Error-handling Middleware===========
/* app.get("/", (req, res) => {
    res.send("Welcome to the home page!");
});

// error handling middleware
app.get("/broken", (req, res, next) => {
    const err = new Error("Something went wrong!");
    next(err);
});

app.get("/test", (req, res, next) => {
    try {
        console.log(myVariable);
    } catch (error) {
        next(error);
    }
});


// error handling middleware
app.use((err, req, res, next) => {
    console.log("server err record kora holo", err.message);

    // new msg for user
    res.status(500).json({
        success: false,
        message: err.message || "Internal Server Error"
    });
});

*/



app.get("/add", (req, res, next) => {
    const a = req.query.a;
    const b = req.query.b;

    if(!a || !b) {
        const error = new Error("Please provide both 'a' and 'b' query parameters.");
        next(error);
    } else {
        res.send(`The sum of ${a} and ${b} is ${Number(a) + Number(b)}.`);
    }
});

// error handling middleware
app.use((err, req, res, next) => {
    res.status(400).send(err.message);
});






module.exports = app;
