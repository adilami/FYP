const express = require('express');
const mongoose = require("mongoose");
const router = require("./route/userRoute");
const cookie = require("cookie-parser");
const cors = require("cors");
const app = express();

app.use(cors({credentials:true,origin:"http://localhost:3000"}));
app.use(cookie());
app.use(express.json());
app.use('/api', router);
mongoose.connect("mongodb+srv://admin:admin@cluster0.bq5eppq.mongodb.net/AuthDatabase?retryWrites=true&w=majority")
.then(()=>{
  app.listen(8000);
  console.log("The Database is connected.");
})
.catch(
  (e)=> console.log(e)
  );