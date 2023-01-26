//this page is for middleware which makes the server more efficient as middleware can process multiple requests at a time.
const admin = require("../models/admin");
const bCrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const jwtSecretKey = "secret123";

const registerAdmin = async (req, res) => {
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
    existingUser = await admin.findOne({ email: email });
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
  const Admin = new admin({
    userName,
    email,
    // encryptedPass,
    pass: encryptedPass
  });
  try {
    await Admin.save();
  } catch (e) {
    console.log(e);
  }
  return res.status(201).json({ message: Admin });
};
}
const loginAdmin = async (req, res) => {
  const { email, pass } = req.body;
  let existingUser;
  try {
    existingUser = await admin.findOne({ email: email });
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
const verify = (req, res, next) => {
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
const getAdmin = async (req, res) => {
//   jwt.verify(String(preToken),jwtSecretKey, (e, user)=> {
//     if(e){
//       console.log(e);
//       return res.status(403).json({message:"Authentication is failed!"})
//     }
// })
  const adminId = req.id;
  let use;
  try {
    use = await admin.findById(adminId, "-pass");
  } catch (e) {
    return new Error(e);
  }
  if (!use) {
    return res.status(404).json({ message: "User was not found!!!" });
  }
  return res.status(200).json({ use });
};

const logoutAdmin = (req, res) => {
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
exports.registerAdmin = registerAdmin;
exports.loginAdmin = loginAdmin;
exports.verify = verify;
exports.getAdmin = getAdmin;
exports.logoutAdmin=logoutAdmin;
