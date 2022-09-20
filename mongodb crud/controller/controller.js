const express = require("express")
const newmodel = require("../schema/schema")

exports.insert = ((req, res) => {
    const data = {
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        phonenumber: req.body.phonenumber,
        city: req.body.city,

    }
    newmodel.create(data, (err, result) => {
        if (err) throw err
        else {
            res.send({ status: true, responsecode: 1, massage: "Data Inserted", data: result })
        }
    })
})
exports.find = ((req, res) => {
    newmodel.find((err, result) => {
        if (err) {
            res.send({ massage: "enter valid email", responsecode: 0, status: false })
        }
        else {
            res.send({ massage: "data finded", responsecode: 1, status: true, data: result })
        }
    });

})

exports.upadate = ((req, res) => {
    newmodel.updateOne({ "firstname": req.body.firstname }, {
        $set: {
            lastname: req.body.lastname,
            phonenumber: req.body.phonenumber,
            city: req.body.city,
        }
    }, (err, result) => {
        if (err) throw err;
        else {
            res.json({ "msg": "document updated....",data:result});
        }
    });

})

exports.delete = ((req,res)=>{
    newmodel.deleteOne(req.body, (err, result) => {
        if (err) throw err;
        else {
            res.json({ "msg": "document deleted..." });
        }
    });
})

