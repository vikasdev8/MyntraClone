const express = require('express')
const app = express(); 
const bodyParser =  require('body-parser')
const cookieParser = require('cookie-parser')
const User = require('./routes/userroutes.js')
const Product = require('./routes/productroute')
const Order = require('./routes/orderroutes')
const errorMiddleware = require('./Middelwares/error');
const path = require("path");
if (process.env.NODE_ENV !== "PRODUCTION") {
    require("dotenv").config({ path: "backend/config/config.env" });
  }

app.use(express.json())
app.use(cookieParser())
app.use(bodyParser.urlencoded({extended:true}))

app.use('/api/v1', User)
app.use('/api/v1', Product)
app.use('/api/v1', Order)

app.use(express.static(path.join(__dirname, "../frontend/build")));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../frontend/build/index.html"));
});

app.use(errorMiddleware)
module.exports = app
