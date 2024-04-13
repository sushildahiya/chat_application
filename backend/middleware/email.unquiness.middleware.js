const User = require('../model/user.model')
module.exports.emailUniquness=async(req,res,next)=>{
    const user =  await User.findOne({email:req.body.email})
    if(user){
        return res.status(409).json({message:"Email address already exists"})
    }
    next()
}