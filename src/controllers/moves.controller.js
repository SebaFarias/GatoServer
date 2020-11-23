const Connection = require('../models/connection')

const makeAMove = async (req,res) => {    
  const { connectionCode, mark, isFinished , cell} = req.body
  if(isNaN(cell) || (mark !== 'x' && mark !== 'o'))return res.status(400).json({})
  const match = await Connection.find({code: connectionCode}) 
  if(match.length > 0){
    let board = [...match[0].board]
    board[cell] = mark 
    const updatedMatch = await Connection.findOneAndUpdate(
      { code: connectionCode },
      { 
        board: board,
        turn: oterMark(mark),
        lastStatus:{
          board: match[0].board,
          turn: match[0].turn,
          wating: match[0].wating,
          updated: match[0].updatedAt,
        }
      },
      { new: true })
    res.json({
        board: updatedMatch.board,
        lastUpdate: updatedMatch.updatedAt,
    })     
  }else {
    res.status(404).json({ msj: 'Partida no Encontrada', msg_en: 'Code not Found',})
  }
}
const cleanBoard = async (req,res) => {
  const { connectionCode } = req.params
  const match = await Connection.find({code: connectionCode}) 
  if(match.length > 0){
    if(!match[0].playing){  ///Here some modifications
      const updatedMatch = await Connection.findOneAndUpdate(
        { code: connectionCode },
        { 
          board: ['','','','','','','','',''] , 
          turn: 'x',
          lastStatus:{
            board: match[0].board,
            turn: match[0].turn,
            wating: match[0].wating,
            updated: match[0].updatedAt 
          },
        },
        { new: true })
      res.json({
        board: updatedMatch.board,
        lastUpdate: updatedMatch.updatedAt
      })
    }else{
      res.json({
        board: match[0].board,
        turn: match[0].turn,
        lastUpdate: match[0].updatedAt
      })
    }        
  }else{
    res.status(404).json({ msj: 'Partida no Encontrada', msg_en: 'Code not Found',})
  }
}
const askRestart = (req,res) => {

}
const askMarkChange = (req,res) => {

}
const oterMark = (mark) => {
  return mark === 'x'? 'o' : 'x'
}

exports.makeAMove = makeAMove
exports.cleanBoard = cleanBoard
exports.askRestart = askRestart
exports.askMarkChange = askMarkChange 