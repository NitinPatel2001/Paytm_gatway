const express = require('express')
const https = require("https");
const qs = require("querystring");
const path = require('path')
const app = express();

app.use(express.json())
app.use(express.urlencoded({extended:true }))

const {payment} = require('./Router/pay')
app.use('/',express.static(path.join(__dirname+'/public')))
app.use('/payment/',payment)

let PORT = process.env.PORT || 4000

app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`);
})
