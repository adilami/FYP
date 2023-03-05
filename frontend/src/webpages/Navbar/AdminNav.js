import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "./navbar.css";
import logo from "./wellbeing.png";

function AdminNav() {
  const history = useNavigate();
  const sendReqLogout = async () => {
    const res = await axios.post("http://localhost:8000/api/logout", null, {
      withCredentials: true,
    });
    // if(redirect){
    //   history("/home")
    // }

    if (res.status === 200) {
      history("/adminLogin");
    } else {
      toast.error("Cant logout!");
    }
  };
  const toggleLogout = () => {
    localStorage.removeItem("tokenAdmin");
    sendReqLogout();
    history("/adminLogin")
    window.location.reload();
    toast.success("Logged out Successfully!");
  }

  const [navbar, setNavbar] = useState(false);
  return (
    <>
      <div className="main">
        <div className="components">
          <div className="first">
            <img src={logo} alt="Logo" />
            <h1 className="navbar">Wellbeing</h1>
          </div>
          <div className={"links"}>
            <nav>
              <div className="alinks">
              <a className="navbar-button" href="/adminDash">
                  Dashboard
                </a>
                <a className="navbar-button" href="/manageUser">
                  Manage User
                </a>
                <a className="navbar-button" href="/addVid">
                  Add Videos
                </a>
                <a className="navbar-button" href="/deleteVid">
                  Manage Generic Videos
                </a>
                <a className="navbar-button" href="/deleteLevelVid">
                  Manage Leveled Videos
                </a>
              </div>
              <div className="navbutton">
                <button className="sign-in-btn" onClick={toggleLogout}>
                  Sign out
                </button>
              </div>
            </nav>
          </div>
          <div
            className="ham"
            onClick={() => {
              setNavbar(!navbar);
            }}
          >
            {navbar ?   (
              <>
                <h1>X</h1>
              </>
            ):(
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
          <a className="navbar-button" href="/manageUser">
            Manage User
          </a>
          <a className="navbar-button" href="/addVid">
            Add Videos
          </a>
          <a className="navbar-button" href="/deleteVid">
            Manage Generic Videos
          </a>
          <a className="navbar-button" href="/deleteLevelVid">
            Manage Leveled Videos
          </a>
          <button className="m-sign-in-btn" href="" onClick={toggleLogout}>
            Sign out
          </button>
        </div>
      )}
    </>
  );
}

export default AdminNav;
