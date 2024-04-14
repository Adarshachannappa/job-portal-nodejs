//imports
const express = require("express");

const PORT = process.ENV || 8080;

//REST Objects
const app = express();

//Routes
app.get("/", function (req, res) {
  res.send("Home Page");
});

//app listen
app.listen(PORT, function () {
  console.log("Server is up and running at: " + PORT);
});
