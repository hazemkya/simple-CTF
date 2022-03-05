const express = require('express')
const app = express()

app.use(express.static('public'))

app.use(express.urlencoded({extended: true}))

app.set('view engine', 'ejs')


app.post('/', (req, res)=>{
    console.log(req.body)
    if(btoa(req.body.username) == 'YWRtaW5fdXNlcl8zNzg0ODc=' && btoa(req.body.password) == 'U3VwZXJTZWN1cmVfcGFzc3dvcmQzNzIzNDk='){    //check then redirect user
        res.redirect('/task2-Sjioew341')
}
    else
        res.redirect('/')
})

const task2Router = require('./routes/task2-Sjioew341')

app.use('/task2-Sjioew341', task2Router)

app.listen(3000)
