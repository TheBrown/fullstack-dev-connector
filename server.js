const express = require("express");
const mongoose = require("mongoose");

const app = express();

// DB Config
const db = require("./config/keys").mongoURI;

// Connect to MongoDB
mongoose
  .connect(db, {useNewUrlParser: true})
  .then(() => console.log("Connected to MonGoDB"))
  .catch(err => console.log(err));

app.get("/", (req, res) => {
  console.log("<h1>Hello World Mother fuck u!</h1>");
  res.send("Hi people");
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Listen add port: ${port}`);
});
