const express = require("express")
const mongoose = require("mongoose");
const userModel = require("../schema/schema");
const controller = require("../controller/controller");


const router = express.Router();

router.post("/insert",controller.insert)
router.get("/find",controller.find)
router.put("/update",controller.upadate)
router.delete("/delete",controller.delete)





module.exports = router 