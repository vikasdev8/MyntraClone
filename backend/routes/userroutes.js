const express = require('express');
const route = express.Router();
const {isAuthenticateuser} = require('../Middelwares/authuser.js')
const {registermobile, getuser, optverify, resendotp, updateuser, logout, updateuserdetails} = require('../controller/usercontroller')

route.post('/registermobile', registermobile)
route.get('/user/:id',isAuthenticateuser, getuser)
route.put('/otpverify/:id', optverify)
route.get('/resendotp/:id', resendotp)
route.put('/updateuser/:id', updateuser)
route.put('/user/:id', updateuserdetails)
route.get('/logout', logout)

module.exports = route