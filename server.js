const express =require('express')
const path =require('path')
const app =express()
const http=require('http').createServer(app)





app.use(express.static(path.join(__dirname,'public')))

const io=require('socket.io')(http)
io.on('connection',socket =>{
    socket.on('sendMessage',msg=>{
        socket.broadcast.emit('sentToAll',msg)
    })
})

 

const PORT =process.env.PORT || 3000
http.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`)
})