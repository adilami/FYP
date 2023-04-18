import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import NavigationBar from "./Navbar/NavigationBar";
import trophy from '../webpages/pictures/trophy.png'
import { useNavigate } from "react-router-dom";
function ChangePass() {
  const history=useNavigate();
  const [email, setEmail] = useState("");
  const [oldPass, setOldPass] = useState("");
  const [newPass, setNewPass] = useState("");
  const [cNewPass, setCNewPass] = useState("");
  const [userId, setUserId] = useState(null);
  const [name, setName] = useState("");
  const [Ban, setBan] = useState(false);
  const [p1, setP1] = useState(false);
  const [p2, setP2] = useState(false);
  const [p3, setP3] = useState(false);
  const [s1, setS1] = useState(false);
  const [s2, setS2] = useState(false);
  const [s3, setS3] = useState(false);
  const [a1, setA1] = useState(false);
  const [a2, setA2] = useState(false);
  const [a3, setA3] = useState(false);

  const handleSubmit = (a) => {
    if (a.key === "Enter") {
      changePassword();
    }
  };
  const changePassword = async () => {
    try {
      const res = await axios.post("http://localhost:8000/api/changePass", {
        name: name,
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
        toast.success("Profile Updated successsfully!!!");
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
        if (response.status ===500){
          localStorage.removeItem("token");
          localStorage.removeItem("tokenAdmin");
          history("/");
          window.location.reload();
        }
        const data = await response.json();
        setUserId(data.use._id);
        setEmail(data.use.email);
        setName(data.use.userName);
        setBan(data.use.isBan);
        setP1(data.use.PLevel1);
        setP2(data.use.PLevel2);
        setP3(data.use.PLevel3);
        setS1(data.use.SLevel1);
        setS2(data.use.SLevel2);
        setS3(data.use.SLevel3);
        setA1(data.use.ALevel1);
        setA2(data.use.ALevel2);
        setA3(data.use.ALevel3);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUser();
  }, [userId]);
  return (
    <>
      <NavigationBar />

      <div className="center-formProfile">
        <div className="login-form-userProfile">
          <h1 className="display-6">User Profile</h1>
          <div className="containerProfile">
            <div className="contentContainer">
              <h4 className="contentTitle">User Name</h4>
              <h4 className="contentInfo"> {name}</h4>
            </div>
            <div className="contentContainer">
              <h4 className="contentTitle">Email</h4>
              <h4 className="contentInfo"> {email}</h4>
            </div>
            <div className="contentContainer">
              <h4 className="contentTitle">Ban Status</h4>
              <h4 className="contentInfo"> {Ban ? "Banned" : "Active"}</h4>
            </div>
            <div className="contentContainer">
              <h4 className="contentTitle">Productivity</h4>

              {p1&&!p2&&!p3 && <h4 className="contentInfo"><img className="trophy" src={trophy}/>{p1 ? "Level 1" : "Active"}</h4>}
              {p1&&p2 &&!p3&& <h4 className="contentInfo"><img className="trophy" src={trophy}/>{p2 ? "Level 2" : "Active"}</h4>}
              {p3&&p2&&p1 && <h4 className="contentInfo"><img className="trophy" src={trophy}/>{p3 ? "Level 3" : "Active"}</h4>}
            </div>
            <div className="contentContainer">
              <h4 className="contentTitle">Sleep</h4>

              {s1&&!s2&&!s3&& <h4 className="contentInfo"> <img className="trophy" src={trophy}/>{s1 ? "Level 1" : "Active"}</h4>}
              {s1&&s2 &&!s3&& <h4 className="contentInfo"> <img className="trophy" src={trophy}/>{s2 ? "Level 2" : "Active"}</h4>}
              {s3&&s2&&s1 && <h4 className="contentInfo"> <img className="trophy" src={trophy}/>{s3 ? "Level 3" : "Active"}</h4>}
            </div>
            <div className="contentContainer">
              <h4 className="contentTitle">Anxiety</h4>

              {a1&&!a2&&!a3 && <h4 className="contentInfo"><img className="trophy" src={trophy}/> {a1 ? "Level 1" : "Active"}</h4>}
              {a2 && a1&&!a3&&<h4 className="contentInfo"> <img className="trophy" src={trophy}/>{a2 ? "Level 2" : "Active"}</h4>}
              {a1&&a2&&a3 && <h4 className="contentInfo"> <img className="trophy" src={trophy}/>{a3 ? "Level 3" : "Active"}</h4>}
            </div>
          </div>
        </div>
        <div className="login-form-changePass">
          <h1 className="display-6">Update Profile</h1>
          <div className="containerLogin">
            <p className="label">User Name</p>
            <input
              type={"text"}
              className="mb-1"
              placeholder="Email"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
            <p className="label">Email</p>
            <input
              type={"text"}
              className="mb-1"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              disabled
            />

            <p className="label">Old Password</p>
            <input
              className="mb-1"
              type={"password"}
              placeholder="Old Password"
              onChange={(e) => setOldPass(e.target.value)}
              value={oldPass}
            />

            <p className="label">New Password</p>
            <input
              className="mb-1"
              type={"password"}
              placeholder="New Password"
              onChange={(e) => setNewPass(e.target.value)}
              value={newPass}
            />
            <p className="label">Confirm New Password</p>
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
