const express = require('express');
const mongoose = require("mongoose");
const router = require("./route/userRoute");
const adminRouter = require("./route/adminRoute");
const cookie = require("cookie-parser");
const cors = require("cors");
const app = express();

const cronJob = require("./cron");
const videoSleep = require('./models/videosSleep');
const videosProd = require('./models/videosProd');
const videosYoga = require('./models/videosYoga');
cronJob.sendMailUser();

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
    User.deleteOne({_id:userId}, function(err){
        console.log(err);
      }
    )
    res.send({ status:"ok", data: "User Removed" });

  }
  catch(e){
    console.log(e);
  }
})

//Add videos to mongodb
app.post('/addVidS',(req, res)=>{
  const vid = req.body
  console.log(vid);
  videoSleep.create(vid, (e, data)=>{
    if(e){
      res.status(500).send(e.message);
    }
    else{
      res.status(201).send(data);
    }
  })
})
app.post('/addVidP',(req, res)=>{
  const vid = req.body
  console.log(vid);
  videosProd.create(vid, (e, data)=>{
    if(e){
      res.status(500).send(e.message);
    }
    else{
      res.status(201).send(data);
    }
  })
})
app.post('/addVidY',(req, res)=>{
  const vid = req.body
  console.log(vid);
  videosYoga.create(vid, (e, data)=>{
    if(e){
      res.status(500).send(e.message);
    }
    else{
      res.status(201).send(data);
    }
  })
})
const Videos1 = mongoose.model("videoSleep");
const Videos2 = mongoose.model("videoYoga");
const Videos3 = mongoose.model("videoProd");


app.get("/getVideoS", async(req, res)=>{
  try{
    const allVideoS = await Videos1.find({});
    res.send({ status: "ok", data: allVideoS})
  }
  catch(e){
    console.log(e);
  }
})
app.get("/getVideoY", async(req, res)=>{
  try{
    const allVideoP = await Videos2.find({});
    res.send({ status: "ok", data: allVideoP})
  }
  catch(e){
    console.log(e);
  }
})
app.get("/getVideoP", async(req, res)=>{
  try{
    const allVideoY = await Videos3.find({});
    res.send({ status: "ok", data: allVideoY})
  }
  catch(e){
    console.log(e);
  }
})
app.post("/removeVideoS", async(req, res)=>{
  const {vidId} = req.body;
  try{
    Videos1.deleteOne({_id:vidId}, function(err){
        console.log(err);
      }
    )
    res.send({ status:"ok", data: "Video Removed" });
  }
  catch(e){
    console.log(e);
  }
})

app.post("/removeVideoY", async(req, res)=>{
  const {vidId} = req.body;

  try{
    Videos2.deleteOne({_id:vidId}, function(err){
        console.log(err);
      }
    )
    res.send({ status:"ok", data: "Video Removed" });
  }
  catch(e){
    console.log(e);
  }
})
app.post("/removeVideoP", async(req, res)=>{
  const {vidId} = req.body;

  try{
    Videos3.deleteOne({_id:vidId}, function(err){
        console.log(err);
      }
    )
    res.send({ status:"ok", data: "Video Removed" });
  }
  catch(e){
    console.log(e);
  }
})



