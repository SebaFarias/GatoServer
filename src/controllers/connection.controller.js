const Connection = require('../models/connection')

const createConnection = (req,res) => {
    let code = generateCode()
    let ussed = Connection.find({'code': code}).limit(1).size()
    console.log(code);
    console.log(ussed);
    console.log(req.body);
    res.json('Hola')
}
const joinByCode = (req,res) => {

}
const disconnectAsGuest = (req,res) => {

}
const disconnectAsHost = (req,res) => {

}
const deleteConnection = (req,res) => {

}
const generateCode = () => {
    let newCode = Math.random().toString(36).toUpperCase().substring(2,6)+'-'+Math.random().toString(36).toUpperCase().substring(2,6)
    return newCode
}

exports.createConnection = createConnection
exports.joinByCode = joinByCode
exports.disconnectAsGuest = disconnectAsGuest
exports.disconnectAsHost = disconnectAsHost
exports.deleteConnection = deleteConnection
