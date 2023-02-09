const User = require("./models/user")
const mailer = require("./mail/mailer");
const nodemailer = require("nodemailer");
const cron = require('node-cron');
const dotenv = require('dotenv');
dotenv.config();

const sendMails = async (reciever) => {
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port:587,
    secure:false,
    service: 'gmail',
    requireTLS:true,
    auth:{
      user:process.env.GMAIL_USERNAME,
      pass:process.env.GMAIL_PASSWORD,
    }
  })

const mailData = {
  from:'Wellbeing App',
  to:reciever,
  subject:'Reminder for wellness Check-in',
  html:'<p>Please Checkin to the app for wellness checkin</p>'
}
transporter.sendMail(mailData, (error)=>{
  if(error){
    console.log(error);
  }
  else{
    console.log("Email Sent");
  }
});
}
const sendMailUser = () =>{
  try{
    cron.schedule("0 0 6 * * *", async function(){
      var Udata = await User.find({});
      if(Udata.length>0){
        var emails = [];
        Udata.map((i)=>{
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