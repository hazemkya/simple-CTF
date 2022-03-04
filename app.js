const bodyParser = require('body-parser');
const express = require('express');

const app = express();
const listenPort = 3000;

app.use(express.static('public'));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json);

app.set('view engine', 'ejs');


app.post('/', (req,res)=>{
    console.log(req);
    res.send('Nope!');
})

app.listen(listenPort, ()=>{
    console.log('Server started...')
})
