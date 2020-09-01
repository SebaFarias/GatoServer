const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = express();
dotenv.config();

mongoose.connect(
    process.env.DB_CONNECTION,
    {useNewUrlParser: true , useUnifiedTopology: true},
    () => {
        console.log('connected to database')
    })

//Route
app.get('/api',(req , res) =>{
    res.send(JSON.stringify({ mensaje: 'Hola mundo'}))
})

app.listen(5500)