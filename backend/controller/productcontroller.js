const A = require('../Middelwares/resolveandcatch')
const Product = require('../model/productmodel')
const Errorhandler = require('../utilis/errorhandel')
var ImageKit = require("imagekit");
const Apifeature = require('../utilis/Apifeatures')

exports.createProduct = A( async(req, res, next)=>{
    const product = await Product.create(req.body)

    res.status(200).json({
        success:true,
        product
    })
})

exports.imagekits = A(async (req, res, next)=>{
    var imagekit = new ImageKit();
    
  
imagekit.listFiles({
    
}, function(error, result) { 
    if(error) console.log(error);
    else {
        res.status(200).json({
            result
        })
    }
   
});
})

exports.getallproducts = A(async (req, res, next)=>{
    const {low,date, width} = req.query
    const apifeature = new Apifeature(Product.find(), req.query).filter().sort(low, date).pagination(width).search()
    const apifeature1 = new Apifeature(Product.find(), req.query).search()
    const apifeature3 = new Apifeature(Product.find(), req.query).filter().sort(low, date).search()
    const products = await apifeature.Product_find;
    const pro = await apifeature1.Product_find;
    const productlength = await apifeature3.Product_find;
    let length = productlength.length
    res.status(200).json({
        products,
        pro,
        length
    })
})

exports.SendSingleProduct = A(async (req, res, next)=>{
    const product = await Product.findById(req.params.id)
    if (!product) {
        return next(new Errorhandler("product not found", 404));
    }
    
    const similar_product = await Product.find({category: product.category, brand: product.brand}).limit(15)
    
    res.status(200).json({
        success:true,
        product,
        similar_product
    })
})

 