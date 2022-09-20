const mongoose = require("mongoose")

mongoose.connect('mongodb://localhost:27017/newdata',(err,connect)=>{
    if(err) throw err
    else{
        console.log("DB is Connect")
    }
})
