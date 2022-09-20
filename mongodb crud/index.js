const express = require("express");
const mongoose = require("./connection/db")


const app = express();
app.use(express.json());  

const router = require("./router/router");
app.use("/data",router);

app.listen(1234,()=>{
    console.log("server is running")
})