const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 4300;

// import routes
const authRoutes = require("./routes/auth");

// connection of database
mongoose.connect(
  `mongodb://piupaul:sonai8961193882@ds135107.mlab.com:35107/store`,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (err) {
      console.log("something went wrong");
    } else {
      console.log("connected with Mongo DB");
    }
  }
);
// testing route
app.get("/", (req, res) => {
  res.send(`This is for TEST, server is running on port ${port}`);
});

// register routes
app.use("/app", authRoutes);

// listen to port
app.listen(port);
console.log(`server is running on port ${port}`);
