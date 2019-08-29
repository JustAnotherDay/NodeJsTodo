const express = require("express");
const app = express();
const mongoose = require("mongoose");
const morgan = require("morgan");
const dotenv = require("dotenv");
dotenv.config();

const bodyParser = require("body-parser");
const expressValidator = require("express-validator");

//routes
const todoRoutes = require("./routes/todoRoute");

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true });
var db = mongoose.connection;
db.on("error", console.error.bind(console, "ERROR DB Connection : "));
db.once("open", function() {
  // we're connected!
  console.log("SUCCESS DB Connection");
});

//middleware
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(expressValidator());
app.use("/", todoRoutes);

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`A Node JS is listening in port ${port}`);
});
