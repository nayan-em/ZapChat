const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
const port = process.env.PORT;
const mongo_uri = process.env.MONGO_URI;

app.use(express.json());
app.use(cors());

app.listen(port, (req, res) => {
  console.log(`Server running on port: ${port}`);
});

mongoose
  .connect(mongo_uri, {})
  .then(() => console.log("MongoDB connection established!"))
  .catch((error) => console.log("MongoDB connection failed: ", error.message));
