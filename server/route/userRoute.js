const express = require("express");

const userRoutes = require("../controller/userController");

const router = express.Router();

router.get("/",userRoutes.getAllAccount);

router.put("/updateaccount/:phoneNo",userRoutes.updateAccount);

router.get("/findone/:phoneNo",userRoutes.findOneRecord);

router.post("/addaccount",userRoutes.addAccount);

router.delete("/deleteaccount/:phoneNo",userRoutes.deleteAccount);

module.exports = router;