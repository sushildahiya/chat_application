const express = require('express')
const { validation } = require('../../middleware/user.validator.middleware')
const { createUser } = require('../../controller/user.controller')
const { emailUniquness } = require('../../middleware/email.unquiness.middleware')
const router = express.Router()

router.post('/createuser',validation,emailUniquness,createUser)

module.exports= router