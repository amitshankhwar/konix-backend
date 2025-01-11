require("dotenv").config();
const express = require("express");
const connectDB = require("./db/dbConnect.js");
const cryptoRoutes = require("./routes/cryptoRoutes.js");

const app = express();
app.use(express.json());

connectDB();
app.use("/api", cryptoRoutes);

module.exports = app;
