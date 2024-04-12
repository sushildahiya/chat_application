const express = require('express')
const bodyParser  = require('body-parser')
const cors  = require('cors')
const port = 8000
const app =express()
const db = require('./configuration/mongoose.configure')

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

app.use('/',require('./router'))
app.listen(port , ()=>console.log(`Server listening on port ${port}`))