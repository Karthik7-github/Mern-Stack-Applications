const mongoose = require('mongoose');

async function connection() {
    try {
        await mongoose.connect("Connection-String");
    } catch (error) {
        console.log("Database connection failed:", error);
    }
}

module.exports = connection;