var express = require('express')
var app = express()

password= 1234;
var port = process.env.PORT || 3000;
app.listen(port ,()=>{
    console.log(`Server is Starting at http://localhost:${port}`)
})