const sendtoken = (user, statuscode, res) =>{
    
    const token = user.getJWTToken();
    const option = {
        expire: new Date(
            Date.now() + 5 * 24*60*60*1000
        ),
        httpOnly:true
    }
    
    res.status(statuscode).cookie('token', token, option).json({
        success: true,
        user,
        token
    })
}

module.exports = sendtoken