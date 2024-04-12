const mongoose = require('mongoose')
mongoose.connect('mongodb://0.0.0.0:27017/chating-engine',{  useNewUrlParser: true,
useUnifiedTopology: true })
const db  = mongoose.connection
db.on('error',(err)=>console.log(err.message))
db.once('open',()=>console.log("Connection successfully established"))