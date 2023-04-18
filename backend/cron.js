const User = require("./models/user")
const nodemailer = require("nodemailer");
const cron = require('node-cron');
const dotenv = require('dotenv');
dotenv.config();

const sendMails = async (reciever) => {
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port:465,
    service: 'gmail',
    importance:"high",
    requireTLS:true, // tls is to be set true for port 465
    auth:{
      user:process.env.GMAIL_USERNAME,
      pass:process.env.GMAIL_PASSWORD,
    }
  })

const mailData = {
  from:'Wellbeing App',
  to:reciever,
  subject:'Reminder for wellness Check-in',
  html:'<h1>Its time for wellness checkin!!!</h1><br><h3>Please visit the app for your wellness check-in.</h3>'
}
transporter.sendMail(mailData, (error)=>{
  if(error){
    console.log(error);
  }
  else{
    console.log("Email has been sent to the users from the database");
  }
});
}
const sendMailUser = () =>{
  try{
    cron.schedule("00 00 06 * * *", async function(){
      var data = await User.find({});
      if(data.length>0){
        var emails = [];
        data.map((i)=>{
          emails.push(i.email)
        });
        sendMails(emails);
      }
    })
  }
  catch(e){
    console.log(e);
  }
}
module.exports = { sendMailUser };