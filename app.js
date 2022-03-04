const bodyParser = require('body-parser');
const express = require('express');

let app = express();
let listenPort = 3000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json);

app.get('/', (req,res) => {
    username = req.body.username;
    password = req.body.password;
    res.send('Welcome')

})

app.listen(listenPort, ()=>{

    console.log('Server started...')
})
