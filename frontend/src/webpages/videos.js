import React, { useEffect, useState } from 'react'
import NavigationBar from './Navbar/NavigationBar'

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
        console.log(dataP, "userData");
        setDataP(dataP.data);
      });
  };
  return (
    <div>
      <NavigationBar />
      <h1>Videos</h1>
      <div className='center'>
        <div className='card'>
          
        </div>
      </div>
    </div>
  )
}

export default Videos;