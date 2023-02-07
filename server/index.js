const express = require('express');
const mongoose = require("mongoose");
const router = require("./route/userRoute");
const adminRouter = require("./route/adminRoute");
const cookie = require("cookie-parser");
const cors = require("cors");

const app = express();

app.use(cors({credentials:true,origin:"http://localhost:3000"}));
app.use(cookie());
app.use(express.json());
app.use('/api', router);
app.use('/api', adminRouter);
mongoose.connect("mongodb+srv://admin:admin@cluster0.bq5eppq.mongodb.net/AuthDatabase?retryWrites=true&w=majority")
.then(()=>{
  app.listen(8000);
  console.log("The Database is connected.");
})
.catch(
  (e)=> console.log(e)
);
const User = mongoose.model("user");
app.get("/getAUser", async(req, res)=>{
  try{
    const allAUser = await User.find({});
    res.send({ status: "ok", data: allAUser})
  }
  catch(e){
    console.log(e);
  }
})
app.post("/removeUser", async(req, res)=>{
  const {userId} = req.body;

  try{
    User.deleteOne({_id:userId}, function(err, res){
        console.log(err);
      }
    )
    res.send({ status:"ok", data: "User Removed" });

  }
  catch(e){
    console.log(e);
  }
})