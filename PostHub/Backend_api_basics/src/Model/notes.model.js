const mongoose = require('mongoose');

const noteschema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
});

const notemodel = mongoose.model("note", noteschema);

module.exports = notemodel;