const jwt = require('jsonwebtoken')



module.exports.authentication= async (req,res,next)=>{
    let token = req.headers.authorization
    if (!token) {
        return res.status(400).json({ message: 'Access denied. No token provided.' });
    }
    try{
    token = token.split(" ")[1]
    const decode =  jwt.verify(token,"sCrEt@1276")
    console.log(decode)
    next()
}
catch(err){
    if(err instanceof jwt.JsonWebTokenError){
        return res.status(401).json({message: "Unauthorized"})
    }
}
}