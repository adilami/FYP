import React, { useEffect, useState } from 'react'
import { ToastContainer } from 'react-toastify'
import AdminNav from '../Navbar/AdminNav'

function AdminDash() {
  const [user, setUser] = useState([]);
  const [videoS, setVideoS] = useState([]);
  const [videoY, setVideoY] = useState([]);
  const [videoP, setVideoP] = useState([]);
  const [videoSlevel, setVideoSlevel] = useState([]);
  const [videoYlevel, setVideoYlevel] = useState([]);
  const [videoPlevel, setVideoPlevel] = useState([]);

  const totalVid = videoS+videoP+videoY;
  const totalLevelVid= videoSlevel+videoPlevel+videoYlevel


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
        console.log("Total number of users: ",data);
        setUser(data);
      });
  };
  const fetchVidS = () => {
    fetch("http://localhost:8000/videoSCount", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Total number of sleep videos: ",data);
        setVideoS(data);
      });
  };
  const fetchVidY = () => {
    fetch("http://localhost:8000/videoYCount", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Total number of yoga videos: ",data);
        setVideoY(data);
      });
  };
  const fetchVidP = () => {
    fetch("http://localhost:8000/videoPCount", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Total number of productivity videos: ",data);
        setVideoP(data);
      });
  };
  const fetchVidSlevel = () => {
    fetch("http://localhost:8000/videoSCountlevel", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Total number of sleep videos: ",data);
        setVideoSlevel(data);
      });
  };
  const fetchVidYlevel = () => {
    fetch("http://localhost:8000/videoYCountlevel", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Total number of yoga videos: ",data);
        setVideoYlevel(data);
      });
  };
  const fetchVidPlevel = () => {
    fetch("http://localhost:8000/videoPCountlevel", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Total number of productivity videos: ",data);
        setVideoPlevel(data);
      });
  };
  return (
    <>
    <AdminNav />
    <h1>Dashboard</h1>
    <h2>Data Analytics</h2>
    <div className='centerDash'>
      <div className='box'>
        <div className='card'>
          <h3>Users</h3>
          <h4>{user}</h4>
          <a className="cardA"href='/manageUser'>See all Users</a>
        </div>
        <div className='card'>
          <h3>Total Generic Videos</h3>
          <h4>{totalVid}</h4>
          <a className="cardA"href='/deleteVid'>See all Videos</a>
        </div>
        <div className='card'>
          <h3>Total Leveled Videos</h3>
          <h4>{totalLevelVid}</h4>
          <a className="cardA"href='/deleteLevelVid'>See all Videos</a>
        </div>
        
        
      </div>
      <div className='box1'>
      <div className='card'>
          <h3>Generic Sleep Video</h3>
          <h4>{videoS}</h4>
          <a className="cardA"href='/deleteVid'>See all Videos</a>
        </div>
      <div className='card'>
          <h3>Generic Yoga Video</h3>
          <h4>{videoY}</h4>
          <a className="cardA"href='/deleteVid'>See all Videos</a>
        </div>
        <div className='card'>
          <h3>Generic Productivity Video</h3>
          <h4>{videoP}</h4>
          <a className="cardA"href='/deleteVid'>See all Videos</a>
        </div>
      </div>
    </div>



    <ToastContainer /> 
    </>
  )
}

export default AdminDash