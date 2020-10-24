require('dotenv').config()
const mongoose = require('mongoose')

const uri = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@gatonegro.7ucsc.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`
const options = {useNewUrlParser: true , useUnifiedTopology: true}

mongoose.connect( uri , options )
.then(() => console.log('connected to database'))
.catch( e => console.log('DB error:', e ))