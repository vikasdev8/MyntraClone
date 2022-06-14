const mongoose = require('mongoose')

const Bag = new mongoose.Schema({
    user:{
        type:mongoose.ObjectId,
        ref:"MynUser",
        required:true
    },
    orderItems: [{
        product:{
            type:mongoose.ObjectId,
            ref:"myntraproduct",
            
            required:true,
        },
        qty:{
            type:Number, 
            default: 1, 
            required:true
        },
    }],
   
})

module.exports = mongoose.model('Bag', Bag)