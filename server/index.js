const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const userRoute = require("./Routes/userRoute");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());

const port = process.env.PORT;
const mongo_uri = process.env.MONGO_URI;

app.use("/api/users", userRoute);

app.listen(port, (req, res) => {
  console.log(`Server running on port: ${port}`);
});

mongoose
  .connect(mongo_uri, {})
  .then(() => console.log("MongoDB connection established!"))
  .catch((error) => console.log("MongoDB connection failed: ", error.message));
