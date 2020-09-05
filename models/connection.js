const { Mongoose } = require("mongoose");

const mongoose = require('mongoose');

const ConnectionSchema = mongoose.Schema({
    code: { type: String, required: true },
    host: { type: String, required: true },
    guest: String,
    board: String,
    isHostTurn: Boolean,
    lastUpdate: { type: Date, default: Date.now },
}); 
module.exports = mongoose.model('Connection', ConnectionSchema)