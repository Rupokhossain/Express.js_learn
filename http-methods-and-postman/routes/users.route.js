
const express = require("express");
const router = express.Router();

router.get("/about", (req, res) => {
    res.send("I am a get request at about route");
});
router.post("/contact", (req, res) => {
    res.send("I am a post request at contact route");
});
router.put("/blog", (req, res) => {
    res.send("I am a put request at blog route");
});
router.delete("/login", (req, res) => {
    res.send("I am a delete request at login route");
});





module.exports = router;