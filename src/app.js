const express = require('express')
const cors = require('cors')
const helmet = require('helmet')
const connectionRoutes = require('./routes/connection.routes')
const movesRoutes = require('./routes/moves.routes')
const app = express()

app.use(cors())
app.use(helmet())
app.use(express.json())

app.use('/api/v1/connection/',connectionRoutes)
app.use('/api/v1/moves/',movesRoutes)

app.get('/', (req,res) => {
    res.json({msg: 'Estamos Funcionando!'})
})
app.get('/favicon.ico', (req,res) => {
    res.sendFile(`${process.cwd()}/Gato.ico`)
})

module.exports = app

