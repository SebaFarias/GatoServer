const { Mongoose } = require("mongoose");

const mongoose = require('mongoose');
mongoose.set('useFindAndModify', false);

const ConnectionSchema = mongoose.Schema({
    code: { type: String, required: true },
    turn: { type: String, required: true },
    host_id: String,
    guest_id: String,
    board: [String],
    playing: Boolean,
    lastStatus:{
        board:[String],
        turn: String,
        playing: Boolean,
        updated: Date,
    },
},{
    timestamps: true,
    versionKey: false,
}); 
module.exports = mongoose.model('Connection', ConnectionSchema)