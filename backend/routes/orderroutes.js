const express = require('express');
const { createorder, createwishlist, getwishlist, createbag, getbag, updateqtybag, deletebag, deletewish } = require('../controller/ordercontroller');
const route = express.Router();

route.post('/create_order', createorder)
route.post('/create_wishlist', createwishlist)
route.get('/get_wishlist/:id', getwishlist)
route.post('/create_bag', createbag)
route.get('/bag/:id', getbag)
route.put('/update_bag', updateqtybag)
route.put('/delete_bag', deletebag)
route.put('/delete_wish', deletewish)

module.exports = route