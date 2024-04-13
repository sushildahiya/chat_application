const express = require('express')
const { validation } = require('../../middleware/user.validator.middleware')
const userController = require('../../controller/user.controller')
const { emailUniquness } = require('../../middleware/email.unquiness.middleware')
const { loginValidation } = require('../../middleware/loginValidation.middleware')
const router = express.Router()

router.post('/createuser',validation,emailUniquness,userController.createUser)
router.post('/login',loginValidation,userController.createSession)


module.exports= router