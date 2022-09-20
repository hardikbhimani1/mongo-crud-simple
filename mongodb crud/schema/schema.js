const express = require("express")
const mongoose = require("mongoose")

const userdata = new mongoose.Schema({
    firstname : {
        type:String,
        required:true
    },
    lastname : {
        type:String,
        required:true
    },
    phonenumber : {
        type:Number,
        required:true
    },
    city : {
        type:String,
        required:true
    },
})

const newmodel = new mongoose.model("deta",userdata)
module.exports = newmodel