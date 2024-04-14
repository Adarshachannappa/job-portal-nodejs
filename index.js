//imports
// const express = require("express");
import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import connectDB from "./config/db.js";
//dotenv config
dotenv.config(); // if .env is not root then add config({path:"./config"})
const PORT = process.env.PORT || 9000;

connectDB();

//REST Objects
const app = express();

//Routes
app.get("/", function (req, res) {
  res.send("Home Page");
});

//app listen
app.listen(PORT, function () {
  console.log(
    `Server is up and running in ${process.env.DEV_MODE} mode at: ${PORT}`
      .bgCyan.white
  );
});
