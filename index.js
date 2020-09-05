const express = require('express');
const mongoose = require('mongoose');
const SocketIO = require('socket.io')
const cors = require('cors');
require('dotenv/config');

const app = express();
const port = 8080;
app.use(cors());
app.use(express.json())
const io = SocketIO(server)

mongoose.connect(
    process.env.DB_CONNECTION,
    {useNewUrlParser: true , useUnifiedTopology: true},
    () => {
        console.log('connected to database')
    })

io.on('connection', () => {
    
})

const generateConnectionCode = () => {
    return `${(Date.now()%10000).toString()}-${(Date.now()*2%10000).toString()}`
}
const isAvailable = (code) => {
    
}
const generateConnection = (host) => {
    const newConnectionCode = generateConnectionCode()
    if(isAvailable(newConnectionCode)){
        const con = {
            code: newConnectionCode,
            host: host
        }
        return saveConnection(con)
    } 
    else{
        return generateConnection()
    }
}


app.get('/api',(req , res) =>{
    res.json({ mensaje: 'Hola mundo'})
})
app.post('/api/newConnection', (req , res) =>{
    let connection = new Connection({
        code: req.body.code,
        host: req.body.host
    })
    connection.save()
     res.json({ mensaje: 'Creating...'})
})
app.post('/api/join', (req,res) => {
    console.log(req.body);
    res.json(req.body);
})

const server = app.listen(port)