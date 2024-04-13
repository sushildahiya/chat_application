const express = require('express')
const router = express.Router()

router.get('/',(req,res)=>{
    res.send("Home path")
})
router.use('/user',require('./user/index'))

module.exports= router