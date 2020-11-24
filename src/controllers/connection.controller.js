const { update } = require('../models/connection')
const Connection = require('../models/connection')

const createConnection = async (req,res) => {
  let newCode = await generateCode()
  const newID = generateId()
  const newConnection = new Connection({
    code: newCode,
    board: ['','','','','','','','',''],
    turn: 'x',
    host_id: newID,
    waiting: newID,
  })
  await newConnection.save()
  res.status(201).json({
    connectionCode: newConnection.code,
    yourId: newConnection.host_id,
    board: newConnection.board,
    waiting: newConnection.waiting,
    lastUpdate: newConnection.updatedAt
  })
}
const joinByCode = async(req,res) => {
  let code = req.body.connectionCode
  let searchResult = await Connection.find({code: code})
  if(searchResult.length === 0){
    res.status(404).json({ msj: 'Partida no Encontrada', msg_en: 'Code not Found',})
  }
  else if(typeof searchResult[0].guest_id === 'undefined' || searchResult[0].guest_id === null){
    let updatedConnection = await Connection.findOneAndUpdate(
      { code: code },
      { 
        guest_id: generateId(searchResult[0].host_id),
        waiting: '',
        lastStatus:{
          board: searchResult.board,
          turn: searchResult.tun,
          updated: searchResult.updatedAt,
          waiting: searchResult.waiting
        }
      },
      { new: true })      
    res.status(200).json({
      connectionCode: updatedConnection.code,
      hostId: updatedConnection.host_id,
      yourId: updatedConnection.guest_id,
      waiting: updatedConnection.waiting,
      board: updatedConnection.board,
      lastUpdate: updatedConnection.updatedAt
    })
  }else{  
    res.status(403).json({ msj: 'Los sentimos, la sala está llena, prueba en otra' , msg_en: 'Sorry, server is full, try another code' })
  }
}
const status = async(req,res) => {
  const { connectionCode } = req.params
  const match = await Connection.find({code: connectionCode})
  if(match.length > 0){
    res.json({
      board: match[0].board,
      p1: match[0].host_id,
      p2: match[0].guest_id,
      turn: match[0].turn,
      before: match[0].lastStatus,
      lastUpdate: match[0].updatedAt,
      waiting: match[0].waiting,
    })
  }
  else res.status(404).json({ msj: 'Partida no Encontrada', msg_en: 'Code not Found',})
}
const disconnect = async (req,res) => {
  const { connectionCode , id } = req.body
  let searchResult = await Connection.find({code: connectionCode})
  if(searchResult.length > 0){
    if(searchResult[0].host_id === id){
      if(typeof searchResult[0].guest_id === 'undefined' || searchResult[0].guest_id === null){
        await Connection.findOneAndDelete({code:connectionCode})
      }
      else{
        const updatedConnection = await Connection.findOneAndUpdate(
          {code: connectionCode},
          {
            host_id: searchResult[0].guest_id, 
            guest_id: null,
            lastStatus:{
              board: searchResult.board,
              turn: searchResult.tun,
              updated: searchResult.updatedAt 
            }
          },
          {new: true})      
      }
    }
    else if(searchResult[0].guest_id === id){
      const updatedConnection = await Connection.findOneAndUpdate(
        {code: connectionCode},
        {
          guest_id: undefined,
          lastStatus:{
            board: searchResult.board,
            updated: searchResult.updatedAt 
          },
        },
        {new: true})      
    }
    res.json({msj: 'Hasta luego, gracias por jugar' , msg_en: 'Bye, thanks for passing by'})
  }
  else res.status(404).json('not found')
}

const generateCode = async() => {
  let newCode = `${Math.random().toString(36).substring(2,6)}-${Math.random().toString(36).substring(2,6)}`.toUpperCase()
  let search = await Connection.find({ code: newCode })
  if(search.length > 0) return generateCode()
  else return newCode    
}
const generateId = (different = '') => {
  const newId = `${Math.random().toString(36).substring(2,11)}${Math.random().toString(36).substring(2,11)}`.toUpperCase()
  if(newId === different) return generateId(different)
  return newId
}

exports.createConnection = createConnection
exports.joinByCode = joinByCode
exports.status = status
exports.disconnect = disconnect