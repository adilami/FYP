import React from "react";
import { ToastContainer } from "react-toastify";
import NavigationBar from "./Navbar/NavigationBar";
import "./Dash.css";
import { useNavigate } from "react-router-dom";

function Dash() {
  const history= useNavigate();
  return (
    <>
      <div className="mainPage">
        <div className="navbar1">
          <NavigationBar />
        </div>
        <div className="centerHome">
          <div className="containerHome">
            <div className="centerDash">
              <div className="card1Dash">
                <h1 className="display-6">
                  The key to a healthy life is having a healthy mind
                </h1>
                <h1>Complete your Daily Checkin</h1>

                <button className="m-sign-in-btn-Dash" onClick={()=>{history("/que")}} >Daily Check-in <i class="bi bi-arrow-right-short"></i></button>
              </div>
              <div className="card1">
              </div>
            </div>
            <div className="centerDash">
              <div className="card1Dash">
                <h1 className="display-6">
                  Inhale the future, exhale the Past
                </h1>
                <h1>Check out our Videos</h1>
                <button className="m-sign-in-btn-Dash" onClick={()=>{history("/videos")}} >Check Videos <i class="bi bi-arrow-right-short"></i></button>
              </div>
              <div className="card2">
              </div>
            </div>
          </div>
        </div>
      </div>

      <ToastContainer />
    </>
  );
}
export default Dash;
