const jwt = require('jsonwebtoken')



module.exports.authentication= async (req,res,next)=>{
    const token = req.header.authentication
    
}