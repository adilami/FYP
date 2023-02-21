import axios from 'axios';
import React, { useState } from 'react'
import { toast, ToastContainer } from 'react-toastify';
import NavigationBar from './Navbar/NavigationBar'

function ChangePass() {
  const [email, setEmail] = useState("");
  const [oldPass, setOldPass] = useState("");
  const [newPass, setNewPass] = useState("");
  const [cNewPass, setCNewPass] = useState("");

  const handleSubmit = (a) => {
    if (a.key === "Enter") {
      changePassword();
    }
  };
  const changePassword =async() =>{
    try {
      const res = await axios.post("http://localhost:8000/api/changePass",
      {
        email: email,
        oldPass: oldPass,
        newPass: newPass,
        confirmNewPass:cNewPass
      });
      // .catch(() => {toast.error("Incorrect Email or Password")});
      // const data = await res.data;
      // return data;

      // console.log('hh',data);
      if (res.status === 200) {
        toast.success("Password Changed Successfully");
        setEmail("");
        setOldPass("");
        setNewPass("");
        setCNewPass("");

      }
    } catch (error) {
      try {
        if (!email || !oldPass || !newPass || !cNewPass) {
          toast.error("Email and password are required.");
        } 
        else if (error.status !== 200) {
          toast.error(error.response.data.message);
        }
      } catch (e) {
        toast.error("Server is down");
      }
    }
  }

  return (
    <>
    <NavigationBar />
    <div>ChangePass</div>
    <h3>Email</h3>
    <input
        type={"text"}
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
    <h3>Old Password</h3>
      <input
        type={"password"}
        placeholder="Old Password"
        onChange={(e) => setOldPass(e.target.value)}
        value={oldPass}
      />
      <h3>New Password</h3>
      <input
        type={"password"}
        placeholder="New Password"
        onChange={(e) => setNewPass(e.target.value)}
        value={newPass}
      />
      <h3>Confirm New Password</h3>
      <input
        type={"password"}
        placeholder="Confirm New Password"
        onChange={(e) => setCNewPass(e.target.value)}
        value={cNewPass}
        onKeyPress={handleSubmit}
      />
      <br>
      </br>
      <br></br>
      <button onClick={changePassword}>Change Password</button>
      <ToastContainer />
    </>
  )
}

export default ChangePass