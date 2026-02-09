let users = require("../models/userModel");

//get all users
exports.getAllUsers = (req, res) => {
    res.status(200).json(users);
};

// post request to create a new user
exports.createUser = (req, res) => {
    const newUser = {
        id: users.length + 1,
        name: req.body.name,
        email: req.body.email
    };

    users.push(newUser);
    res.status(201).json(newUser);
};

// put request to update a user
exports.updateUser = (req, res) => {
    const id = parseInt(req.params.id);
    const {name, email} = req.body;

    let user = users.find(u => u.id === id);

    if(user) {
        user.name = name;
        user.email = email;
        res.status(200).json({message: "User updated successfully", user});
    } else {
        res.status(404).json({message: "User not found"});
    }
}

// delete request to delete a user
exports.deleteUser = (req, res) => {
    const id = parseInt(req.params.id);
    users = users.filter(u => u.id !== id);
    res.status(200).json({message: "User deleted successfully"});
};

