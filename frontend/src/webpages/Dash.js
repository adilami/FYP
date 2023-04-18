import React from "react";
import { ToastContainer } from "react-toastify";
import NavigationBar from "./Navbar/NavigationBar";
import "./Dash.css";
import { useNavigate } from "react-router-dom";
import card1 from "./pictures/card1.png";
import card2 from "./pictures/yoga.png";

function Dash() {
  const history = useNavigate();
  return (
    <>
      <div className="mainPage">
        <div className="navbar1">
          <NavigationBar />
        </div>
        <div className="centerHome">
          <div className="containerHome">
            <div className="container">
              <div className="rowDash mt-5 rounded-4">
                <div className="row">
                  <div className="col-lg-4">
                    <div className="card1">
                      <img className="img-custom" src={card1}></img>
                    </div>
                  </div>
                  <div className="col-lg-8">
                    <div className="cardBackground">
                      <h1 className="display-6">
                        The key to a healthy life is having a healthy mind
                      </h1>
                      <h1>Complete your Daily Checkin</h1>

                      <button
                        className="m-sign-in-btn-Dash"
                        onClick={() => {
                          history("/que");
                        }}
                      >
                        Daily Check-in <i class="bi bi-arrow-right-short"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="rowDash mt-5 rounded-4">
                <div className="row">
                  <div className="col-lg-4">
                    <div className="card1">
                      <img className="img-custom" src={card2}></img>
                    </div>
                  </div>
                  <div className="col-lg-8">
                    <div className="cardBackground">
                      <h1 className="display-6">
                        Inhale the future, exhale the Past
                      </h1>
                      <h1>Check out our Videos</h1>

                      <button
                        className="m-sign-in-btn-Dash"
                        onClick={() => {
                          history("/videos");
                        }}
                      >
                        Videos <i class="bi bi-arrow-right-short"></i>
                      </button>
                    </div>
                  </div>
                </div>
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
