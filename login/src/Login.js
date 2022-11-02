import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function Login() {
  const navigate = useNavigate();

  const handleClick = () => {
    // 👇️ navigate programmatically
    navigate("/register", { replace: true });
  };
  const history = useNavigate();
  const [input, setInput] = useState({
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
    try {
      const res = await axios.post("http://localhost:8000/api/login", {
        email: input.email,
        pass: input.pass,
      });
      // .catch(() => {toast.error("Incorrect Email or Password")});
      // const data = await res.data;
      // return data;
      // console.log('hh',data);

      if (res.status === 200) {

        toast.success("Logged In Successfully")
        history("/home");
      }
    } catch (error) {
      if (!input.email || !input.pass) {
        toast.error("Email and password are required.");
      } else if (error.status !== 200) {
        toast.error(error.response.data.message);
      }
    }
  };

  // const submit = (e) => {

  //   else{
  //     sendReq().then(() => history("/home"));
  //   }
  // };
  const handleSubmit = (a) => {
    if (a.key === "Enter") {
      sendReq();
    }
  };
  return (
    <>
      <div className="center-form">
        <div className="login-form">
          <h1>Login</h1>
          <div className="container">
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
            <button className="mb-1 sig-in-btn" onClick={sendReq}>
              Login
            </button>
            <p>
              Dont have an Account, <a href="./Register">Register</a>
            </p>
            <button className="create-acount-btn" onClick={handleClick}>
              Register
            </button>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}

export default Login;
