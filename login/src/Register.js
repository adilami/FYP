import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import { Link } from 'react-router-dom'
function Register() {

  const history = useNavigate();
  const [input, setInput] = useState({
    userName: "",
    email: "",
    pass: "",
  });
  const setChange = (e) => {
    setInput((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const sendReq = async () => {  
      const res = await axios
      .post("http://localhost:8000/api/register", {
        userName: input.userName,
        email: input.email,
        pass: input.pass,
      })
      .catch(() => toast.error("The email already exists. Please Login instead!"))
    const data = await res.data;
    return data;
  };
    const submit = (e) => {
      if(!input.userName||!input.email||!input.pass){
        toast.error("All the text field needs to be filled!!!");
      }
      else{
        sendReq().then(() => history("/"));
      }
  };
  const handleSubmit = (e) => {
    if (e.key === "Enter") {
      submit();
    }
  };
  const navigate = useNavigate();

    
    const handleClick = () => {
      // 👇️ navigate programmatically
      navigate("/", { replace: true });
    };
  
  return (
    <>
      <div className="center-form">
        <div className="login-form">
          <h1>Register</h1>
          <div className="container">
            <input
              name="userName"
              className="mb-1"
              type="text"
              placeholder="Username"
              value={input.userName}
              onChange={setChange}
            />
            <input
              name="email"
              className="mb-1"
              type="text"
              placeholder="Email"
              value={input.email}
              onChange={setChange}
            />
            <input
              name="pass"
              className="mb-2"
              type="password"
              minLength={8}
              placeholder="Password"
              value={input.pass}
              onChange={setChange}
              onKeyPress={handleSubmit}
            />
            <button className="create-acount-btn" onClick={submit}>
              Register
            </button>
            <p>Already have an account, <a href="./">Login</a></p>
            <button className="mb-1 sig-in-btn" onClick={handleClick}>Login</button>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}

export default Register;
