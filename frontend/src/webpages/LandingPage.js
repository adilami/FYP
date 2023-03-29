import React from "react";
import LandinNav from "./Navbar/LandinNav";
import "../webpages/landing.css";
import slider from './pictures/slider.png';

function LandingPage() {
  return (
    <>
      <LandinNav />
      <div className="containerSlider ">
        <div className="slider">
        <div id="carouselExampleAutoplaying" class="carousel slide carousel-dark" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img className="fill" src={slider}  alt="..."/>
    </div>
    <div class="carousel-item">
      <img className="fill" src={slider}  alt="..."/>
    </div>
    <div class="carousel-item">
      <img className="fill" src={slider} alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</div>
      </div>
    </>
  );
}

export default LandingPage;
