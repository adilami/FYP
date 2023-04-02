import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import NavigationBar from "./Navbar/NavigationBar";

function ChangePass() {
  const [email, setEmail] = useState("");
  const [oldPass, setOldPass] = useState("");
  const [newPass, setNewPass] = useState("");
  const [cNewPass, setCNewPass] = useState("");
  const [userId, setUserId] = useState(null);
  const [name, setName] = useState('');
  const[Ban, setBan]=useState(false);
  const[p1, setP1]=useState(false);
  const[p2, setP2]=useState(false);
  const[p3, setP3]=useState(false);
  const[s1, setS1]=useState(false);
  const[s2, setS2]=useState(false);
  const[s3, setS3]=useState(false);
  const[a1, setA1]=useState(false);
  const[a2, setA2]=useState(false);
  const[a3, setA3]=useState(false);



  const handleSubmit = (a) => {
    if (a.key === "Enter") {
      changePassword();
    }
  };
  const changePassword = async () => {
    try {
      const res = await axios.post("http://localhost:8000/api/changePass", {
        name:name,
        email: email,
        oldPass: oldPass,
        newPass: newPass,
        confirmNewPass: cNewPass,
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
          toast.error("All fields are required.");
        } else if (error.status !== 200) {
          toast.error(error.response.data.message);
        }
      } catch (e) {
        toast.error("Server is down");
      }
    }
  };
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/home", {
          method: "GET",
          credentials: "include",
        });
        const data = await response.json();
        setUserId(data.use._id);
        setEmail(data.use.email)
        setName(data.use.userName)
        setBan(data.use.isBan)
        setP1(data.use.PLevel1);
        setP2(data.use.PLevel2);
        setP3(data.use.PLevel3);
        setS1(data.use.SLevel1);
        setS2(data.use.SLevel2);
        setS3(data.use.SLevel3);
        setA1(data.use.ALevel1);
        setA2(data.use.ALevel2);
        setA3(data.use.ALevel2);


      } catch (error) {
        console.error(error);
      }
    };


    fetchUser();
  }, [userId]);
  return (
    <>
      <NavigationBar />

      <div className="center-form">
        <div className="login-form-changePass">
          <h1 className="display-6">User Profile</h1>
          <div className="containerLogin">
          <h4>User Name: {name}</h4>
            <h4>Email: {email}</h4>
            <h4>Ban Status: {Ban?"Banned":"Active"}</h4>
            <h4>Productivity Level 1: {p1?"Completed":"Not Completed"}</h4>
            <h4>Productivity Level 2: {p2?"Completed":"Not Completed"}</h4>
            <h4>Productivity Level 3: {p3?"Completed":"Not Completed"}</h4>
            <h4>Sleep Level 1: {s1?"Completed":"Not Completed"}</h4>
            <h4>Sleep Level 2: {s2?"Completed":"Not Completed"}</h4>
            <h4>Sleep Level 3: {s3?"Completed":"Not Completed"}</h4>   
             <h4>Anxiety Level 1: {a1?"Completed":"Not Completed"}</h4>
            <h4>Anxiety Level 2: {a2?"Completed":"Not Completed"}</h4>
            <h4>Anxiety Level 3: {a3?"Completed":"Not Completed"}</h4>


          </div>
        </div>
        <div className="login-form-changePass">
          <h1 className="display-6">Update Profile</h1>
          <div className="containerLogin">
          <p>User Name</p>
            <input
              type={"text"}
              className="mb-1"
              placeholder="Email"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
            <p>Email</p>
            <input
              type={"text"}
              className="mb-1"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              disabled
            />

            <p>Old Password</p>
            <input
              className="mb-1"
              type={"password"}
              placeholder="Old Password"
              onChange={(e) => setOldPass(e.target.value)}
              value={oldPass}
            />

            <p>New Password</p>
            <input
              className="mb-1"
              type={"password"}
              placeholder="New Password"
              onChange={(e) => setNewPass(e.target.value)}
              value={newPass}
            />
            <p>Confirm New Password</p>
            <input
              className="mb-1"
              type={"password"}
              placeholder="Confirm New Password"
              onChange={(e) => setCNewPass(e.target.value)}
              value={cNewPass}
              onKeyPress={handleSubmit}
            />
            <br></br>
            <br></br>
            <button className="sig-in-btn" onClick={changePassword}>
              Update Details
            </button>
          </div>
        </div>
      </div>

      <ToastContainer />
    </>
  );
}

export default ChangePass;
