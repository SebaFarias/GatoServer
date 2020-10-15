const app = require('./app')
require('./database')

const server_port = process.env.YOUR_PORT || process.env.PORT || 8080
const server_host = process.env.YOUR_HOST || '0.0.0.0';

app.listen(server_port, server_host ,()=>{
    console.log(`Listening on ${server_host}:${server_port}`)
})