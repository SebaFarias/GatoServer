const app = require('./app')
require('./database')

const port = process.env.port || 8080


app.listen(port, ()=>{
    console.log(`Listening on http://localhost:${port}`)
})
