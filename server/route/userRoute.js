//express is a server framwrok that is used for building API's with node.js
//api stands for Application programming interface which provides means for two or more computers to communicate with each other.
//router is used to create new router objects that is used to handle requests.
const express = require("express");
const router = express.Router();
const { register, verification, getUser, login, logout, banUser, unbanUser, changePass }=require("../controller/userController");

router.post("/register", register);
router.post("/login", login);
router.get("/home",verification, getUser);
router.post("/logout",verification, logout);
router.put("/banUser/:id", banUser);
router.put("/unbanUser/:id", unbanUser);
router.post("/changePass", changePass);



module.exports = router;