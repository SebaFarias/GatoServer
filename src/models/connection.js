const { Mongoose } = require("mongoose");

const mongoose = require('mongoose');
mongoose.set('useFindAndModify', false);

const ConnectionSchema = mongoose.Schema({
    code: { type: String, required: true },
    host_id: String,
    guest_id: String,
    board: [String],
    isHostTurn: Boolean,
},{
    timestamps: true,
    versionKey: false,
}); 
module.exports = mongoose.model('Connection', ConnectionSchema)