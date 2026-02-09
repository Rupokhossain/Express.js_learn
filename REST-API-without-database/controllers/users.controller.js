
const users = require("../models/users.model");
let {v4: uuidv4} = require("uuid");


const getAllUsers = (req, res) => {
    res.status(200).json({users});
};

//create user
const createUser = (req, res) => {
    const { userName, email } = req.body || {};

    if (!userName || !email) {
        return res.status(400).json({
            message: "userName and email are required"
        });
    }

    const newUser = {
        id: uuidv4(),
        userName,
        email,
    };

    users.push(newUser);
    res.status(201).json(newUser);
};

// update user
const updateUser = (req, res) => {
    const userid = req.params.id;
    const { userName, email } = req.body;
    users.filter((user) => user.id === userid).map((selcetesUser) => {
        selcetesUser.userName = userName;
        selcetesUser.email = email;
    });
    res.status(200).json(user)
}




module.exports = {getAllUsers, createUser, updateUser};