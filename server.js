const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const cookieParser = require("cookie-parser");
const cors = require("cors");
const app = express();
const port = 4300;

// import routes
const authRoutes = require("./routes/user");
const projectRoutes = require("./routes/project")

// get request body
app.use(express.json()); // instead body parser
app.use(cors());
app.use(cookieParser());

// connection of database
mongoose
  .connect(process.env.MONGODATABASECONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then((result) => {
    // listen to port
    app.listen(port);
    console.log(`server is running on port ${port}`);
    console.log(`DB connected`);
  })
  .catch((err) => {
    console.log(err);
  });
// =========================================

// testing route
app.get("/", (req, res) => {
  res.send(`This is for TEST, server is running on port ${port}`);
});

// register routes
app.use("/app", authRoutes);
app.use("/app", projectRoutes)
