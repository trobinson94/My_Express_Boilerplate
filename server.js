// grab environment variables
require("dotenv").config()
// Imposrt express
const express = require("express")
// import database connection
const mongoose = require("./db/connection")
// import merced logger
const {log} = require("mercedlogger")
// import middleware
const methodOverride = require("method-override")
const morgan = require("morgan")
const cors = require("cors")
// PORT VARIABLE
const PORT = process.env.PORT || "2021"

////////////////////////////////////
// Create APP Project
////////////////////////////////////
const app = express()

////////////////////////////////////
// Set the view engine
////////////////////////////////////
app.set("view engine", "ejs")

////////////////////////////////////
// Setup Middleware
////////////////////////////////////
app.use(cors()) // Prevent Cors Errors is building an API
app.use(methodOverride("_method")) // swap method of requests with _method query
app.use(express.static("public")) // serve the public folder as static
app.use(morgan("tiny")) // Request logging
app.use(express.json()) // Parse JSON bodies
app.use(express.urlencoded({extended: false})) // parse bodies from form submissions

////////////////////////////////////
// Routes and Routers
////////////////////////////////////

// test route
app.get("/", (req, res) => {
    res.send("<h1>Hello World</h1")
});

////////////////////////////////////
// App Listener
////////////////////////////////////
app.listen(PORT, () =>
    log.white("🚀 Server Launch 🚀", `Listening on Port ${PORT}`)
)
