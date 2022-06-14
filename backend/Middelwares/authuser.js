const jwt = require('jsonwebtoken')
const ErrorHandler = require('../utilis/errorhandel')
const User = require('../model/usermodel')
const A = require('./resolveandcatch')

exports.isAuthenticateuser = A(async(req, res, next)=>{
    const { token } = req.cookies;

    if (!token) {
       return next( new ErrorHandler('User token has been expired or not been genrated', 400)) 
    }

    const verifytoken = jwt.verify(token, process.env.SECRETID)
    req.user = await User.findById(verifytoken.id)
    next()
})