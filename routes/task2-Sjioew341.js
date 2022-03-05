const express = require('express');
const router = express.Router()

router.use(express.static('./routes/hidden'))
router.use(express.urlencoded({extended: true}))

router.get('/', (req,res)=>{
    res.sendFile(__dirname +'/hidden/task2-SDAJKo126hs.html')
})

module.exports = router