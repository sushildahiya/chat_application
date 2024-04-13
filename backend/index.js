const express = require('express')
const bodyParser  = require('body-parser')
const cors  = require('cors')
const port = 8000
const app =express()
const db = require('./configuration/mongoose.configure')


app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

app.use('/',require('./router'))
// Error handling middleware
app.use((err, req, res, next) => {
    // Check if the error is related to JSON parsing
    if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
      console.error('JSON Parsing Error:', err.message);
      res.status(400).json({ success: false, message: 'Invalid JSON payload' });
    } else {
      // Pass other errors to the default Express error handler
      next(err);
    }
  });
app.listen(port , ()=>console.log(`Server listening on port ${port}`))