const { Mongoose } = require("mongoose");

const mongoose = require('mongoose');

const ConnectionSchema = mongoose.Schema({
    code: { type: String, required: true },
    host: String,
    guest: String,
    board: String,
    isHostTurn: Boolean,
},{
    timestamps: true,
    versionKey: false,
}); 
module.exports = mongoose.model('Connection', ConnectionSchema)