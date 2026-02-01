const express = require("express");
const app = express();

/* const products = [
  {
    id: 1,
    name: "Iphone",
    price: 1000,
  },

  {
    id: 2,
    name: "Samsung",
    price: 2000,
  },
  {
    id: 3,
    name: "Pixel",
    price: 7000,
  },
];


app.get("/product/:id", (req, res) => {
    const productId = parseInt(req.params.id); //string theke number a banalam.

    // array theke oi id r product ti khuje ber kora.
    const singleProduct = products.find(p => p.id === productId);

    if(singleProduct) {
        res.json(singleProduct);
    } else {
        res.status(404).send("Sorry, this product is not available!");
    }
}); */


// single parameter
/* app.get("/profile/:username", (req, res) => {
    const user = req.params.username;
    res.send(`<h1>Welcome!</h1> <p>This is <b>${user}</b> my profile!</p>`);
}); */


// multiple parameters

/* app.get("/products/:category/:brand", (req, res) => {
    // destracturing kore data newa (professional way)

    const { category, brand } = req.params;

    res.json({
        message: "Search result pawa gese",
        category: category,
        brand: brand,
        status: "In Stock"
    });
}); */



// nested parameters
/* app.get("/post/:postId/comment/:commentId", (req, res) => {
    const pId = req.params.postId;
    const cId = req.params.commentId;

    res.send(`apni <b>${pId}</b> number post er <b>${cId}</b> number comment porchen.`);
}); */




//======challenge Tasks======

// school management

/*app.get("/student/:class/:roll", (req, res) => {
    const cId = req.params.class;
    const rId = req.params.roll;

    res.send(`Eti ${cId} class er ${rId} number student er profile.`);
}); */


/* app.get("/student/:class/:roll", (req, res) => {
    const {class: className, roll} = req.params; // ak line a shob niye asha
    res.send(`Eti ${className} class er ${roll} number student er profile.`)
}); */


// search api

const citys = [
  {
    id: 1,
    name: "dhaka",
  },

  {
    id: 2,
    name: "jessor",
  },
  {
    id: 3,
    name: "barishal",
  },
];

/* app.get("/city/:id", (req, res) => {
   const cityId = parseInt(req.params.id)

   const singleCity = citys.find(c => c.id === cityId);

   if(singleCity) {
    res.json(singleCity)
   } else {
    res.status(404).send("sorry! this city is not available!");
   }
}); */


/* app.get("/city/:name", (req, res) => {
    const cName = req.params.name.toLowerCase();
    const singleCity = citys.find(c => c.name.toLowerCase() === cName);

    if (singleCity) {
        res.json(singleCity);
    } else {
        res.status(404).send("Sorry! This city is not available in our list!");
    }
});
*/

app.get("/add/:num1/:num2", (req, res) => {
    const n1 = req.params.num1;
    const n2 = req.params.num2;

    // string theke number a convert kora
    const sum = Number(n1) + Number(n2);

    if(isNaN(n1) || isNaN(n2)) {
        res.status(400).send("Plz give the right number!");
    } else {
        res.send(`Sum: ${sum}`);
    }

});

module.exports = app;
