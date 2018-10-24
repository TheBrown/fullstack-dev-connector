const express = require("express");

const app = express();

app.get("/", (req, res) => {
  console.log("<h1>Hello World Mother fuck u!</h1>");
  res.send("Hi people");
});

const port = process.env.PORT || 5000;

app.listen(port, () => { console.log(`Listen add port: ${port}`)});

