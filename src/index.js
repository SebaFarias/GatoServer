const app = require('./app')
require('./database')

const port = process.env.PORT || 8080


app.listen(port, ()=>{
    console.log(`Listening on http://localhost:${port}`)
})
