const mongoose = require("mongoose");


async function connectDB() {

    await mongoose.connect("Connection-string");

    console.log("Connected to DB")

}


module.exports = connectDB;