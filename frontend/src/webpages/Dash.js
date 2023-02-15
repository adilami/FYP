import React from "react";
import { ToastContainer } from "react-toastify";
import NavigationBar from "./Navbar/NavigationBar";
import "./Dash.css"


function Dash() {
  return (
    <>
      <div className="mainPage">
        <div className="navbar1">
        <NavigationBar />
        </div>
        <div className="centerHome">
          <div className="containerHome">
          <div className="card1">
            <h1>The key to a healthy life is having a healthy mind</h1>
           <a className="a" href="/que"><h1>Click here for your Daily Check-in</h1></a>
          </div>
          <div className="card2">
            <h1>Inhale the future, exhale the Past</h1>
           <a className="a" href="/videos"><h1>Click here to watch wellbeing videos</h1></a>

          </div>
          
          </div>
        </div>
      </div>
      
      <ToastContainer />
    </>
  );
}
export default Dash;
