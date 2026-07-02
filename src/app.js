const express = require("express");
const cors = require("cors");


const app = express();


app.use(cors());

app.use(express.json());


// Serve uploaded images
app.use("/uploads", express.static("src/uploads"));



// Routes
app.use("/api/auth", require("./routes/authRoutes"));

app.use("/api/students", require("./routes/studentRoutes"));



module.exports = app;