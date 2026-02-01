const express = require("express");
const app = express();

// array filtering
/* const users = [
    {
        id: 1, 
        name: "Siam",
        age: 22
    },
    {
        id: 2, 
        name: "Wahida",
        age: 21
    },
    {
        id: 3, 
        name: "Moury",
        age: 21
    },
];

app.get("/users", (req, res) => {
    const searchAge = req.query.age;

    if(searchAge) {
        // jodi user age diye search kore, tobe filter koro
        const filteredUsers = users.filter(u => u.age === Number(searchAge));
        res.json(filteredUsers);
    } else {
        res.json(users);
    }
}); */


// search functionality

/*const products = [
    { id: 1, name: "iPhone 14", brand: "Apple" },
    { id: 2, name: "Samsung S23", brand: "Samsung" },
    { id: 3, name: "iPhone 12", brand: "Apple" },
    { id: 4, name: "Redmi Note 12", brand: "Xiaomi" }
];

app.get("/search-products", (req, res) => {
    const searchTerm = req.query.q;

    if(searchTerm) {
        const result = products.filter(p => p.name.toLowerCase().includes(searchTerm.toLowerCase()));

        res.json(result);
    } else {
        res.json(products);
    }
}); */


// range filtering

const items = [
    { name: "Mouse", price: 500 },
    { name: "Keyboard", price: 1200 },
    { name: "Monitor", price: 8000 },
    { name: "USB Cable", price: 300 }
];

app.get("/filter-price", (req, res) => {
    let { min, max } = req.query;

    // string theke number baniye
    min = Number(min);
    max = Number(max);

    if(min && max) {
        const filteredItems = items.fillter(item => item.price >= min && item.price <= max);
    }
})

module.exports = app;