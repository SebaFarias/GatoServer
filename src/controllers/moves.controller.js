const Connection = require('../models/connection')

const makeAMove = async (req,res) => {
    const { connectionCode, mark, cell, isFinished } = req.body
    if(isNaN(cell) || (mark !== 'x' && mark !== 'o'))return res.status(400).json({})
    const match = await Connection.find({code: connectionCode}) 
    if(match.length > 0 && match[0].playing){
        let board = [...match[0].board]
        board[cell] = mark 
        const updatedMatch = await Connection.findOneAndUpdate(
            { code: connectionCode },
            { board: board , playing: !isFinished},
            { new: true })
        res.json({
            board: updatedMatch.board,
            lastUpdate: updatedMatch.updatedAt
        })        
    }else res.status(404).json({ msj: 'Partida no Encontrada', msg_en: 'Code not Found',})

}
const listenToMove = async(req,res) => {
    const { connectionCode } = req.params
    const match = await Connection.find({code: connectionCode})
    if(match.length > 0){
        res.json({
            board: match[0].board,
            p2: match[0].guest_id,
            lastUpdate: match[0].updatedAt
        })
    }
    else res.status(404).json({ msj: 'Partida no Encontrada', msg_en: 'Code not Found',})
}
const cleanBoard = async (req,res) => {
    const { connectionCode } = req.params
    const match = await Connection.find({code: connectionCode}) 
    if(!match[0].playing){
        const updatedMatch = await Connection.findOneAndUpdate(
            { code: connectionCode },
            { board: [' ',' ',' ',' ',' ',' ',' ',' ',' '] , playing: true },
            { new: true })
        res.json({
            board: updatedMatch.board,
            lastUpdate: updatedMatch.updatedAt
        })        
    }
}
const askRestart = (req,res) => {

}
const askMarkChange = (req,res) => {

}

exports.makeAMove = makeAMove
exports.listenToMove = listenToMove
exports.cleanBoard = cleanBoard
exports.askRestart = askRestart
exports.askMarkChange = askMarkChange 


