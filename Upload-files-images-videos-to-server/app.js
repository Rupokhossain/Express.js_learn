const express = require("express");
const app = express();
const path = require("path");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    const fileName = Date.now() + '-' + file.originalname;
    cb(null, fileName);
  }
});

const upload = multer({ storage: storage });

app.post("/upload", upload.single("myFile"), (req, res) => {
    console.log(req.file);

    res.send("File uploaded successfully");
})


module.exports = app;