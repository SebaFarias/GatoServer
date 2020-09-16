require('dotenv').config()
const mongoose = require('mongoose')


mongoose.connect(
    process.env.DB_CONNECTION,
    {useNewUrlParser: true , useUnifiedTopology: true},
    () => {
        console.log('connected to database')
    })
    .catch(error => console.log(error))