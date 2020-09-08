const express = require("express");
const app = express();
const port = 4300;

// testing route
app.get("/", (req, res) => {
  res.send("test here piu");
});

// listen to port
app.listen(port);
console.log(`server is running on port ${port}`);
