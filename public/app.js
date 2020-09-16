const io = require('socket.io')
const { connection } = require('mongoose')
const getButton = document.querySelector('#getBtn')
const postButton = document.querySelector('#postBtn')
const conButton = document.querySelector('#connectBtn')
const disconButton = document.querySelector('#disconnectBtn')
const API_URL = 'http://localhost:8080' 

getButton.addEventListener('click',() => {sendGet()})
postButton.addEventListener('click',() => {sendPost()})

io.on('connection', socket =>{
    
})

const sendGet = () => {
    fetch(API_URL).then( res => {
        console.log(JSON.stringify(res.body));
    })
}


const sendPost = () => {
    fetch(API_URL,{
        method: 'POST',
        body: JSON.stringify({
            message: 'Hola'
        }),
        headers: {
            'content-type': 'application/json'
        }        
    })
}