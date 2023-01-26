//express is a server framwrok that is used for building API's with node.js
//api stands for Application programming interface which provides means for two or more computers to communicate with each other.
//router is used to create new router objects that is used to handle requests.
const express = require("express");
const adminRouter = express.Router();
const { registerAdmin, verify, getAdmin, loginAdmin, logoutAdmin}=require("../controller/adminController");

adminRouter.post("/adminRegister", registerAdmin);
adminRouter.post("/Adminlogin", loginAdmin);
adminRouter.get("/Adminhome",verify, getAdmin);
adminRouter.post("/logoutAdmin", verify, logoutAdmin);

module.exports = adminRouter;