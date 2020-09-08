const express = require("express");
const app = express();
const port = 4300;

// testing route
app.get("/", (req, res) => {
  res.send(`This is for TEST, server is running on port ${port}`);
});

// listen to port
app.listen(port);
console.log(`server is running on port ${port}`);
