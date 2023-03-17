import React, { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import NavigationBar from "./Navbar/NavigationBar";
import YoutubeEmbed from "./YoutubeEmbed";

function Videos() {
  const [data, setData] = useState([]);
  const [dataY, setDataY] = useState([]);
  const [dataP, setDataP] = useState([]);

  useEffect(() => {
    fetchUserS();
    fetchUserY();
    fetchUserP();
  }, []);
  const fetchUserS = () => {
    fetch("http://localhost:8000/getVideoS", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userData");
        setData(data.data);
      });
  };
  const fetchUserY = () => {
    fetch("http://localhost:8000/getVideoY", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((dataY) => {
        console.log(dataY, "userData");
        setDataY(dataY.data);
      });
  };
  const fetchUserP = () => {
    fetch("http://localhost:8000/getVideoP", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((dataP) => {
        setDataP(dataP.data);
      });
  };
  const newData = dataP.filter((i) => {
    if (i.level == "1") {
      return i;
    }
  });
  return (
    <>
      <NavigationBar />
      <h1>Videos</h1>
      <h1> Sleep Videos</h1>
      <div className="main-container">
        {data.map((i) => {
          return (
            <>
              {console.log(i.name)}
              <div className="video-container">
                <div className="video-card">
                  <div className="video-responsive">
                    <YoutubeEmbed embedId={i.vidUrl} />
                  </div>
                  <h5 className="h5">Name: {i.name}</h5>
                  <h5 className="h6">Description: {i.description}</h5>
                </div>
              </div>
            </>
          );
        })}
      </div>
      <h1> Yoga Videos</h1>
      <div className="main-container">
        {dataY.map((i) => {
          return (
            <>
              {console.log(i.name)}
              <div className="video-container">
                <div className="video-card">
                  <div className="video-responsive">
                    <YoutubeEmbed embedId={i.vidUrl} />
                  </div>
                  <h5 className="h5">Name: {i.name}</h5>
                  <h5 className="h6">Description: {i.description}</h5>
                </div>
              </div>
            </>
          );
        })}
      </div>
      <h1> Productivity Videos</h1>
      <div className="main-container">
        {dataP.map((i) => {
          return (
            <>
              {console.log(i.name)}
              <div className="video-container">
                <div className="video-card">
                  <div className="video-responsive">
                    <YoutubeEmbed embedId={i.vidUrl} />
                  </div>
                  <h5 className="h5">Name: {i.name}</h5>
                  <h5 className="h6">Description: {i.description}</h5>
                </div>
              </div>
            </>
          );
        })}
      </div>
      <ToastContainer />
    </>
  );
}

export default Videos;
