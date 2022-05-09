const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const userRoute = require("./routes/user");
//testing
// settings
const app = express();
const port = process.env.PORT || 3001;
const MONGODB_URI = "mongodb+srv://dmottabass:Caracas2012@mobileapp.6uitk.mongodb.net/mobileapp?retryWrites=true&w=majority";

// middlewares
app.use(express.json());
app.use("/api", userRoute);

// routes
app.get("/", (req, res) => {
  res.send("Welcome to my API");
});

// mongodb connection
mongoose
  .connect(MONGODB_URI)
  .then(() => console.log("Connected to MongoDB Atlas"))
  .catch((error) => console.error(error));

// server listening
app.listen(port, () => console.log("Server listening to", port));

//adding staging branch