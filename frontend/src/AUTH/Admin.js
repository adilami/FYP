import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';

function Admin() {
  const userLogin = () => {
    history("/login")
  }
  const history = useNavigate();
  const [input, setInput] = useState({
    email: "",
    pass: "",
  });
  const [showpass, setShowpass] = useState(false);
  const togglePass = () => {
    setShowpass(!showpass);
  };
  const setChange = (e) => {
    setInput((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  // const sendReq = () => {
  //   history("/adminDash");
  // }
  const sendReq = async () => {
      try {
        const res = await axios.post("http://localhost:8000/api/Adminlogin", {
          email: input.email,
          pass: input.pass,
        });

        if (res.status === 200) {
          localStorage.setItem("tokenAdmin", res.data); 
          history("/adminDash");
          window.location.reload();
          toast.success("Logged In Successfully");
        }
      } catch (error) {
        try {
          if (!input.email || !input.pass) {
            toast.error("Email and password are required.");
          } else if (error.status !== 200) {
            toast.error(error.response.data.message);
          }
        } catch (e) {
          toast.error("Server is down");
        }
      }
  };

  const handleSubmit = (a) => {
    if (a.key === "Enter") {
      sendReq();
    }
  };
  return (
    <>
    <div className="center-form">
        <div className="login-form">
          <h1>Admin Login</h1>
          <div className="container">
            <input
              name="email"
              className="mb-1"
              type="text"
              placeholder="Email"
              value={input.email}
              onChange={setChange}
            />
            <div className="icon">
              <input
                name="pass"
                className="text-icon"
                type={showpass ? "text" : "password"}
                minLength={8}
                placeholder="Password"
                value={input.pass}
                onChange={setChange}
                onKeyPress={handleSubmit}
              />
              <button className="eye" onClick={togglePass}>
                <i class="fa fa-eye"></i>
              </button>
            </div>

            <button className="mb-1 sig-in-btn" onClick={sendReq}>
              Login
            </button>
            <p>Are you a User?</p>
            <button className="create-acount-btn" onClick={userLogin}>
              User Login
            </button>
          </div>
        </div>
       
      </div>
      <ToastContainer />
    </>
  )
}

export default Admin