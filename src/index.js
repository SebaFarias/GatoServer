const app = require('./app').app
require('./database')

const port = 8080


app.listen(port, ()=>{
    console.log(`Listening on http://localhost:${port}`);
})
