const express = require("express");
const router = express.Router();
const studentController = require("../controllers/studentController");

router.get("/:id", studentController.getStudents);

module.exports = router;