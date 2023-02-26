//this page is for middleware which makes the server more efficient as middleware can process multiple requests at a time.
const user = require("../models/user");
const bCrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { use } = require("../route/userRoute");
const jwtSecretKey = "secret123";

const register = async (req, res) => {
  const { userName, email, pass } = req.body;
  let existingUser;
  if(!userName||!email||!pass){
    return res
      .status(400)
      .json({
        message: "All the text fields are required",
      });
  }
  else{
  try {
    existingUser = await user.findOne({ email: email });
  } catch (e) {
    console.log(e);
  }
  if (existingUser) {
    return res
      .status(400)
      .json({
        message:
          "Email is already taken.",
      });
  }
  const encryptedPass = bCrypt.hashSync(pass);
  const User = new user({
    userName,
    email,
    // encryptedPass,
    pass: encryptedPass,
    isBan:"false"
  });
  try {
    await User.save();
  } catch (e) {
    console.log(e);
  }
  return res.status(201).json({ message: User });
};
}
const login = async (req, res) => {
  const { email, pass } = req.body;
  let existingUser;
  try {
    existingUser = await user.findOne({ email: email });
  } catch (e) {
    return e;
  }
 
  if (!existingUser) {
    return res
      .status(500)
      .json({
        message:
          "The Email/Password is Incorrect!",
      });
  }
  if(existingUser.isBan){
    return res
    .status(403)
    .json({
      message:"User is banned",
    })
  }
  const correctPass = bCrypt.compareSync(pass, existingUser.pass);
  if (!correctPass) {
    return res.status(500).json({ message: "The Email/Password is Incorrect!" });
  }
  const token = jwt.sign({ id: existingUser._id }, jwtSecretKey, {
    expiresIn: "1hr",
  });
  if(req.cookies[`${existingUser._id}`]){
    req.cookies[`${existingUser._id}`] = ""
  }
  res.cookie(String(existingUser._id), token, {
    path: "/",
    expires: new Date(Date.now() + 1000 * 3600),
    httpOnly: true,
    sameSite: "lax",
  });
  return res
    .status(200)
    .json({ message: "Logged In Successfully", user: existingUser, token });
};
const verification = (req, res, next) => {
  const cookies = req.headers.cookie;
  const token = cookies.split("=")[1];
  console.log(token);
  if (!token) {
    return res.status(404).json({ message: "No token is found" });
  }
  jwt.verify(String(token), jwtSecretKey, (e, user) => {
    if (e) {
      return res.status(400).json({ message: "The recieved token is invalid" });
    }
    console.log(user.id);
    req.id = user.id;
  });
  next();
};
const getUser = async (req, res) => {
//   jwt.verify(String(preToken),jwtSecretKey, (e, user)=> {
//     if(e){
//       console.log(e);
//       return res.status(403).json({message:"Authentication is failed!"})
//     }
// })
  const userId = req.id;
  let use;
  try {
    use = await user.findById(userId, "-pass");
  } catch (e) {
    return new Error(e);
  }
  if (!use) {
    return res.status(404).json({ message: "User was not found!!!" });
  }
  return res.status(200).json({ use });
};

const logout = (req, res) => {
  const cookies = req.headers.cookie;
  const preToken = cookies.split("=")[1];
  if(!preToken){
    return res.status(400).json({message:"Cannot find token"})
  }
  jwt.verify(String(preToken),jwtSecretKey, (e, user)=> {
    if(e){
      console.log(e);
      return res.status(403).json({message:"Authentication is failed!"})
    }
    res.clearCookie(`${user.id}`);
    req.cookies[`${user.id}`]="";
    return res.status(200).json({message:"Logged out successfully!"})
  
  })
}

const banUser = async (req, res)=>{
  const { id } = req.params;
  try{
    const ban = await user.findByIdAndUpdate(
      id, 
      { isBan:true },
      { new:true }
    )
    res.json({
      ban
    })
  }
  catch(e){
    res.status(500).json({message:e.message})
  }
}
const unbanUser = async (req, res)=>{
  const { id } = req.params;
  try{
    const ban = await user.findByIdAndUpdate(
      id, 
      { isBan:false },
      { new:true }
    )
    res.json({
      ban
    })
  }
  catch(e){
    res.status(500).json({message:e.message})
  }
}
const changePass = async (req, res)=>{
  const { email, oldPass, newPass, confirmNewPass } = req.body;
  if(!email || !oldPass || !newPass || !confirmNewPass ){
    return res
      .status(400)
      .json({
        message: "All the text fields are required",
      });
  }
  const existingUser = await user.findOne({email:email});
  if(!existingUser){
    return res
    .status(400)
    .json({
      message: "The user is not found",
    });
  }
  if(newPass!==confirmNewPass){
    return res
    .status(400)
    .json({
      message: "The new passwords don't match !!!",
    });
  }
  const encryptedPass = bCrypt.hashSync(newPass);
  const changedPass = await user.findOneAndUpdate({email}, {
    $set:{
      pass:encryptedPass
    }
  })
  if(changedPass){
    res.status(200).json({message:"Password changed Successfully"});
  }

}

exports.register = register;
exports.login = login;
exports.verification = verification;
exports.getUser = getUser;
exports.logout=logout;
exports.banUser=banUser;
exports.unbanUser=unbanUser;
exports.changePass=changePass;

