const ErrorHandler = require('../utilis/errorhandel.js')

module.exports =(err, req, res, next)=>{
    err.statusCode = err.statusCode || 500;
    err.message = err.message || "Internal Server Error";

    if(err.name === 'casterror'){
        const message = `resource not found .invalid ${err.path}`;
        err = new ErrorHandler (message, 400)
    }

    // Duplicate key error in mongoose

    if (err.code == 11000) {
        const message = `Duplicate ${object.keys(err.keyValue)} Entered`;
        err = new ErrorHandler (message, 400)
    }

    // Wrong token entered

    if (err.name == "JsonWebTokenError") {
        const message = `Json Web Token is invalid, try again..`;
        err = new ErrorHandler (message, 400)
    }

    //Token Expire Error

    if (err.name == "TokenExpiredError") {
        const message = `Json Web Token Expired, try again..`;
        err = new ErrorHandler (message, 400)
    }

    res.status(err.statusCode).json({
        success: false,
        message: err.message,
    });
}; 