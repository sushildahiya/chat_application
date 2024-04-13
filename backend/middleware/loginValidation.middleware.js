const {body, validationResult} = require('express-validator')

module.exports.loginValidation=async (req,res,next)=>{
    try{
    const rules = [body('email').isEmail().withMessage('Email address is required')]
    await Promise.all(rules.map(rule=>rule.run(req)))

    const validationErrors = validationResult(req) 
    if(!validationErrors.isEmpty){
        return res.status(400).json({message:validationErrors.array()[0].msg})
    }
    next()
}catch(err){
    return res.status(400).json({message:"Client side error"})
}
}