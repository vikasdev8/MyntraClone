const mongoose = require('mongoose')

const wishlist = new mongoose.Schema({
    user:{
        type:mongoose.ObjectId,
        ref:"MynUser",
        required:true
    },
    orderItems: [
    {
        product:{
        type:mongoose.ObjectId,
        ref:"myntraproduct",
        required:true}
    }
    ],
   
})

module.exports = mongoose.model('wishlist', wishlist)