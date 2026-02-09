const {v4: uuidv4} = require("uuid");

const users = [
    {
        id: uuidv4(),
        userName: "Siam Ahmed",
        email: "234242@gmail.com",
    },
    {
        id: uuidv4(),
        userName: "Wahida Islam",
        email: "qwerqr@gmail.com",
    },
];

module.exports = users;