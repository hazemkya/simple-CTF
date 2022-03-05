const express = require('express')
const app = express()

app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))

// app.get('/', (req, res) =>{
//     console.log('hi')
//     res.render('index')
// })

app.post('/', (req, res)=>{
    console.log(req.body)
    if(btoa(req.body.username) == 'YWRtaW5fdXNlcl8zNzg0ODc=' && btoa(req.body.password) == 'U3VwZXJTZWN1cmVfcGFzc3dvcmQzNzIzNDk=')    //check then redirect user
        
        res.sendFile(__dirname +'/hidden/task2.html')
    else
        res.redirect('/')


})


app.listen(3000)
