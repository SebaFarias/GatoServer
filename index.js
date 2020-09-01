const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv/config');

const app = express();
const port = 8080;
app.use(cors());
app.use(express.json())

mongoose.connect(
    process.env.DB_CONNECTION,
    {useNewUrlParser: true , useUnifiedTopology: true},
    () => {
        console.log('connected to database')
    })

const generateConnectionCode = () => {
    return `${(Date.now()%10000).toString()}-${(Date.now()*2%10000).toString()}`
}
const isAvailable = (code) => {
    
}


app.get('/api',(req , res) =>{
    res.json({ mensaje: 'Hola mundo'})
})
app.get('/api/newConnection', (req , res) =>{
    res.json({ mensaje: 'Creating...'})
})
app.post('/api/join', (req,res) => {
    console.log(req.body);
    res.json(req.body);
})

app.listen(port)