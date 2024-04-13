const {body, validationResult} = require('express-validator')

module.exports.validation =async (req,res,next)=>{
    const rules =[body('username').notEmpty().withMessage('Name is required'),
    body('email').isEmail().withMessage('Email address should be required'),
    body('password').isStrongPassword().withMessage('Password should be strong'),
    body('contact_no').isLength(10).withMessage("contact_no should be atleast 10 digits"),]


    await Promise.all(rules.map(rule=>rule.run(req)))

    let validationErrors = validationResult(req)
    if(!validationErrors.isEmpty()){
        return res.status(400).json({message:validationErrors.array()[0].msg})
    }
    next()
}

