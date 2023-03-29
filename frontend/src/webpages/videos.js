import React, { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import NavigationBar from "./Navbar/NavigationBar";
import YoutubeEmbed from "./YoutubeEmbed";

function Videos() {
  const [data, setData] = useState([]);
  const [dataY, setDataY] = useState([]);
  const [dataP, setDataP] = useState([]);
  const [id, setId] = useState([]);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

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
                  <div className="video-responsive1">
                    <img
                      className="cardImg"
                      src={i.imgUrl}
                      onClick={() => {
                        setId(i.vidUrl);
                        setDesc(i.description);
                        setTitle(i.name);
                      }}
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                    ></img>
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
                  <div className="video-responsive1">
                    <img
                      className="cardImg"
                      src={i.imgUrl}
                      onClick={() => {
                        setId(i.vidUrl);
                        setDesc(i.description);
                        setTitle(i.name);
                        
                      }}
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                    ></img>
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
              <div className="video-container">
                <div className="video-card">
                  <div className="video-responsive1">
                    <img
                      className="cardImg"
                      src={i.imgUrl}
                      onClick={() => {
                        setId(i.vidUrl);
                        setDesc(i.description);
                        setTitle(i.name);
                        
                      }}
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                    ></img>
                  </div>
                  <h5 className="h5">Name: {i.name}</h5>
                  <h5 className="h6">Description: {i.description}</h5>
                </div>
              </div>
            </>
          );
        })}
      </div>
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-xl">
          <div class="modal-content">
            <div class="modal-body">
              <YoutubeEmbed embedId={id} />
              <div
                className="videoData"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  textAlign: "left",
                }}
              >
                <h5 class="modal-title fs-5 text-start">
                  <strong>Name:</strong> {title}
                </h5>
                <h5 class="modal-title fs-5 text-start">
                  <strong>Description:</strong> {desc}
                </h5>
              </div>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
                onClick={() => {
                  window.location.reload();
                }}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}

export default Videos;
