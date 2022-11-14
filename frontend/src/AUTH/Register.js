import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { Link } from 'react-router-dom'
function Register(){

  const history = useNavigate();
  const [input, setInput] = useState({
    userName: "",
    email: "",
    pass: "",
  });
  const [showpass, setShowpass]=useState(false);
  const togglePass = () => {
    setShowpass(!showpass)
  }
  const setChange = (e) => {
    setInput((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const sendReq = async () => {  
    const re = /\S+@\S+\.\S+/
    const valEmail = re.test(String(input.email).toLowerCase());
    if(!valEmail){
        toast.error('Enter a valid Email')
    }
    else{
    try{
      if(input.pass.length<8){
        toast.error("Password must contain atleast 8 characters.")
      }
      else{
      const res = await axios
      .post("http://localhost:8000/api/register", {
        userName: input.userName,
        email: input.email,
        pass: input.pass,
      })
    
      
      if(res.status === 201) {
        toast.success("Registered Successfully")
        history("/");
      }}
    }
      catch(error){
      try{
        if(!input.userName||!input.email||!input.pass){
          toast.error("All text fields are required.")
        }
        else if(error.status!==201){
          toast.error(error.response.data.message)

        }
      }
      catch(e){
        toast.error("Server is down!")
      }
      }
    }
  };
  //   const submit = (e) => {
  //     if(!input.userName||!input.email||!input.pass){
  //       toast.error("All the text field needs to be filled!!!");
  //     }
  //     else{
  //       sendReq().then(() => history("/"));
  //     }
  // };
  const handleSubmit = (e) => {
    if (e.key === "Enter") {
      sendReq();
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
            <div className="icon">
            <input
              name="pass"
              className="text-icon"
              type={showpass ? "text":"password"}
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
            <button className="create-acount-btn" onClick={sendReq}>
              Register
            </button>
            <p>Already have an account?</p>
            <button className="mb-1 sig-in-btn" onClick={handleClick}>Login</button>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}

export default Register;
