import React, { useEffect, useState } from 'react'
import { ToastContainer } from 'react-toastify'
import AdminNav from '../Navbar/AdminNav'

function AdminDash() {
  const [user, setUser] = useState([]);
  const [videoS, setVideoS] = useState([]);
  const [videoY, setVideoY] = useState([]);
  const [videoP, setVideoP] = useState([]);

  const totalVid = videoS+videoP+videoY;


  useEffect(() => {
    fetchUser();
    fetchVidS();
    fetchVidY();
    fetchVidP();
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
          <h3>Total Videos</h3>
          <h4>{totalVid}</h4>
          <a className="cardA"href='/deleteVid'>See all Videos</a>
        </div>
        
        
      </div>
      <div className='box1'>
      <div className='card'>
          <h3>Sleep Video</h3>
          <h4>{videoS}</h4>
          <a className="cardA"href='/deleteVid'>See all Videos</a>
        </div>
      <div className='card'>
          <h3>Yoga Video</h3>
          <h4>{videoY}</h4>
          <a className="cardA"href='/deleteVid'>See all Videos</a>
        </div>
        <div className='card'>
          <h3>Productivity Video</h3>
          <h4>{videoP}</h4>
          <a className="cardA"href='/deleteVid'>See all Videos</a>
        </div>
      </div>
      <div className='box2'>
     
      </div>
    </div>



    <ToastContainer /> 
    </>
  )
}

export default AdminDash