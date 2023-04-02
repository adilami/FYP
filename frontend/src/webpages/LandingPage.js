import React from "react";
import LandinNav from "./Navbar/LandinNav";
import "../webpages/landing.css";
import slider from "./pictures/slider.png";
import slider1 from "./pictures/slider1.png";
import slider2 from "./pictures/slider2.png";
import { useNavigate } from "react-router-dom";

function LandingPage() {

  const toggleLogin = () => {
    history("/login");
  
  };
  const history = useNavigate();

  return (
    <>
    <div className="navTop">
      <LandinNav />
      </div>
      <div className="bottom">
        <div id="home">
      <div className="container rounded mt-4">
        <div
          id="carouselExampleAutoplaying"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-inner rounded-4">
            <div class="carousel-item active">
              <img className="fill rounded" src={slider} alt="..." />
              <div class="carousel-caption d-none d-md-block">
                <h1 style={{ color: "white" }}>"Not until we are lost,</h1>
                <h1 style={{ color: "white" }}>
                  do we begin to understand ourselves"
                </h1>
              </div>
            </div>
            <div class="carousel-item">
              <img className="fill rounded" src={slider1} alt="..." />
              <div class="carousel-caption d-none d-md-block">
                <h1 style={{ color: "white" }}>
                  "Mental Health is not a destination, but a process,
                </h1>
                <h1 style={{ color: "white" }}>
                  It's about how you drive, not where you're going"
                </h1>
              </div>
            </div>
            <div class="carousel-item">
              <img className="fill rounded" src={slider2} alt="..." />
              <div class="carousel-caption d-none d-md-block">
                <h1 style={{ color: "white" }}>"Young people,</h1>
                <h1 style={{ color: "white" }}>
                  have an almost biological destiny to be hopeful"
                </h1>
              </div>
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      </div>
      <div id="aboutUs"className="aboutCard text-bg-success">
        <div className="aboutContent">
        <h2 className="display-6">About Us</h2>
        <div className="about">
          <h5>Mental Health Wellbeing app is mainly designed to help user relax, reduce stress, develop habit of meditating and doing yoga. This apps aim to help users manage their symptoms and improve their overall mental wellbeing by providing generic videos and leveled videos as per the problem the user specifies. </h5>
          <h5>The key features of the App is that it contains videos to reduce stress, contains levled videos where another level of video is opened after watching videos of that level. The app also contains the list of hospitals in Pokhara or Kathmandu or both as per the location of the user present.</h5>
          <br/>
          <br/>
          <h4>Checkout our app to begin your wellness.</h4>
          <br/>
          <button className="m-sign-in-btn1" href="" onClick={toggleLogin}>
            Login
          </button>
          <br/>
          </div>
        </div>
        </div>
        <div id="contactUs">
        <footer class="footer text-center">
            <div class="container">
                <div class="row">
                    <div class="col-lg-4 mb-5 mb-lg-0">
                        <h2 class="text-uppercase mb-4"><i class="bi bi-geo"></i> Location</h2>
                        <h2 class="lead mb-0">
                            Baluwatar-4, Kathmandu
                            <br/>
                            Nepal, 44616
                        </h2>
                    </div>
                    <div class="col-lg-4">
                        <h2 class="text-uppercase mb-4">About Developer</h2>
                        <h2 class="lead mb-0">
                          Name: Aditya Lamichhane
                          
                        </h2>
                        <h2 class="lead mb-0">
                        Phone: +977-9800000000
                        </h2>
                    </div>
                    <div class="col-lg-4 mb-5 mb-lg-0">
                        <h2 class="text-uppercase mb-4">Find Me On</h2>
                        <a class="btn btn-outline-light btn-social mx-1" href="https://www.instagram.com/lamichhaneaditya/" target="_blank"><i class="bi bi-instagram"></i></a>
                        <a class="btn btn-outline-light btn-social mx-1" href="https://www.linkedin.com/in/aditya-lamichhane-a8a967223/" target="_blank"><i class="bi bi-linkedin"></i></a>
                    </div>
                </div>
            </div>
        </footer>

        </div>
      </div>
    </>
  );
}

export default LandingPage;
