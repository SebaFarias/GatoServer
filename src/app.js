const express = require('express')
const cors = require('cors')
const connectionRoutes = require('./routes/connection.routes').router
const movesRoutes = require('./routes/moves.routes').router
const app = express()

app.use(cors())
app.use(express.json())

app.use('/api/v1/connection/',connectionRoutes)
app.use('/api/v1/moves/',movesRoutes)

module.exports = app

