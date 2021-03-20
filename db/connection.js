// grab environment variables
require("dotenv").config();
/// IMPORT MONGOOSE
const mongoose = require("mongoose");
// IMPORT MERCED LOGGER FOR COLORFUL LOGS
const {log} = require("mercedlogger")
// Bring in our database string from .env or default string
const MONGODB_URL = process.env.MONGODB_URL || "mongodb://localhost:27017/database"

////////////////////////////////////
// Mongoose Configuration Object to Avoid Warnings
////////////////////////////////////
const config = {
    useNewUrlParse: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}

////////////////////////////////////
// Making the Database Connection
////////////////////////////////////
mongoose.connect(MONGODB_URL, config)

////////////////////////////////////
// Handling Connection Events
////////////////////////////////////
mongoose.connection
    //event for when connection opens
    .on("open", () => log.green("STATUS", "Connected to Mongo"))
    // Event for when connection closes
    .on("close", () => log.red("STATUS", "Disconnected from Mongo"))
    // Event for connection errors
    .on("error", (error) => log.red("Error", error) )

////////////////////////////////////
// Exporting our Connection
///////////////////////////////////
module.exports = mongoose