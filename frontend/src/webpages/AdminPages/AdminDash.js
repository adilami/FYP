import React, { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import AdminNav from "../Navbar/AdminNav";

function AdminDash() {
  const [user, setUser] = useState([]);
  const [videoS, setVideoS] = useState([]);
  const [videoY, setVideoY] = useState([]);
  const [videoP, setVideoP] = useState([]);
  const [videoSlevel, setVideoSlevel] = useState([]);
  const [videoYlevel, setVideoYlevel] = useState([]);
  const [videoPlevel, setVideoPlevel] = useState([]);

  const totalVid = videoS + videoP + videoY;
  const totalLevelVid = videoSlevel + videoPlevel + videoYlevel;

  useEffect(() => {
    fetchUser();
    fetchVidS();
    fetchVidY();
    fetchVidP();
    fetchVidSlevel();
    fetchVidYlevel();
    fetchVidPlevel();
  }, []);

  const fetchUser = () => {
    fetch("http://localhost:8000/userCount", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Total number of users: ", data);
        setUser(data);
      });
  };
  const fetchVidS = () => {
    fetch("http://localhost:8000/videoSCount", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Total number of sleep videos: ", data);
        setVideoS(data);
      });
  };
  const fetchVidY = () => {
    fetch("http://localhost:8000/videoYCount", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Total number of yoga videos: ", data);
        setVideoY(data);
      });
  };
  const fetchVidP = () => {
    fetch("http://localhost:8000/videoPCount", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Total number of productivity videos: ", data);
        setVideoP(data);
      });
  };
  const fetchVidSlevel = () => {
    fetch("http://localhost:8000/videoSCountlevel", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Total number of sleep videos: ", data);
        setVideoSlevel(data);
      });
  };
  const fetchVidYlevel = () => {
    fetch("http://localhost:8000/videoYCountlevel", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Total number of yoga videos: ", data);
        setVideoYlevel(data);
      });
  };
  const fetchVidPlevel = () => {
    fetch("http://localhost:8000/videoPCountlevel", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Total number of productivity videos: ", data);
        setVideoPlevel(data);
      });
  };
  return (
    <>
      <AdminNav />
      <h1 className="display-5" >Admin Dashboard</h1>
      <br/>
      <div className="container">
        <div className="row">
          <div className="col-lg-10 offset-lg-1">
            <div className="row">
              <div className="col-lg-4">
                <div className="card text-bg-secondary">
                  <h4>
                    <i class="bi bi-person-fill"></i>
                  </h4>
                  <h4>{user}</h4>
                  <h3>Total Users</h3>
                  
                  <a style={{color:'white'}} href="/manageUser">
                    See all Users
                  </a>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="card text-bg-danger">
                  <h4>
                    <i class="bi bi-youtube"></i>
                  </h4>
                  <h4>{totalVid}</h4>

                  <h3>Generic Videos</h3>

                  <a style={{color:'white'}} href="/deleteVid">
                    See all Videos
                  </a>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="card text-bg-primary">
                  <h4>
                    <i class="bi bi-youtube"></i>
                  </h4>
                  <h4>{totalLevelVid}</h4>

                  <h3>Leveled Videos</h3>

                  <a style={{color:'white'}} href="/deleteLevelVid">
                    See all Videos
                  </a>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="card text-bg-primary pl ">
                  <h4>
                    <i class="bi bi-youtube"></i>
                  </h4>
                  <h4>{videoS}</h4>

                  <h3>Sleep Video</h3>
                  <a style={{color:'white'}} href="/deleteVid">
                    See all Videos
                  </a>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="card text-bg-success">
                  <h4>
                    <i class="bi bi-youtube"></i>
                  </h4>
                  <h4>{videoY}</h4>

                  <h3>Yoga Video</h3>

                  <a style={{color:'white'}} href="/deleteVid">
                    See all Videos
                  </a>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="card text-bg-secondary">
                  <h4>
                    <i class="bi bi-youtube"></i>
                  </h4>
                  <h4>{videoP}</h4>

                  <h3>Productivity Video</h3>

                  <a style={{color:'white'}} href="/deleteVid">
                    See all Videos
                  </a>
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

export default AdminDash;
