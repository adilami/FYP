import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "./navbar.css";
import logo from "./wellbeing.png";

function NavigationBar() {
  const history = useNavigate();
  const sendReqLogout = async () => {
    const res = await axios.post("http://localhost:8000/api/logout", null, {
      withCredentials: true,
    });
    // if(redirect){
    //   history("/home")
    // }

    if (res.status === 200) {
      history("/");
    } else {
      toast.error("Cant logout!");
    }
  };
  const toggleLogout = () => {
    localStorage.removeItem("token");
    history("/");
    window.location.reload();
    sendReqLogout();

    toast.success("Logged out Successfully!");
  };
  // const hamburger = () =>{
  //   hamburger.
  // }
  const [navbar, setNavbar] = useState(false);
  return (
    <>
      <div className="main">
        <div className="components">
          <div className="first">
            <img className="img" src={logo} alt="Logo" />
            <h1 className="navbar">Wellbeing</h1>
          </div>
          <div className={"links"}>
            <nav>
              <div className="alinks">
                <a className="navbar-button" href="/home">
                  Home
                </a>
                <a className="navbar-button" href="/que">
                  Questionnaire
                </a>
                <a className="navbar-button" href="/videos">
                  Videos
                </a>
                <a className="navbar-button" href="/hospital">
                  Hospitals
                </a>
              </div>
              <div class="dropdown">
                {/* <img className="avatar" src={avatar}></img> */}
                <button class="btn " type="button" data-bs-toggle="dropdown">
                  {" "}
                  <span className="bar"></span>
                  <span className="bar"></span>
                  <span className="bar"></span>
                </button>
                <ul class="dropdown-menu dropdown-menu-dark">
                  <li>
                    {" "}
                    <a class="dropdown-item" href="/userProfile">
                      User Profile
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item">
                      <button className="sign-in-btn" onClick={toggleLogout}>
                        Sign out
                      </button>
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
          <div
            className="ham"
            onClick={() => {
              setNavbar(!navbar);
            }}
          >
            {navbar ? (
              <>
                <h1>X</h1>
              </>
            ) : (
              <>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
              </>
            )}
          </div>
        </div>
      </div>
      {navbar && (
        <div className="mobile">
          <a className="navbar-button" href="/">
            Home
          </a>
          <a className="navbar-button" href="/que">
            Questionnaire
          </a>
          <a className="navbar-button" href="/videos">
            Videos
          </a>
          <a className="navbar-button" href="/hospital">
            Hospitals
          </a>
          <a className="navbar-button" href="/userProfile">
            User Profile
          </a>

          <button className="m-sign-in-btn" href="" onClick={toggleLogout}>
            Sign out
          </button>
        </div>
      )}
    </>
  );
}

export default NavigationBar;
