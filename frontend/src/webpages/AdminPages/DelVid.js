import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import AdminNav from "../Navbar/AdminNav";

function DelVid() {
  const [data, setData] = useState([]);
  const [dataY, setDataY] = useState([]);
  const [dataP, setDataP] = useState([]);

  
  useEffect(() => {
    fetchVidS();
    fetchVidY();
    fetchVidP();
  }, []);
  const fetchVidS = () => {
    fetch("http://localhost:8000/getVideoS", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userData");
        setData(data.data);
      });
  };
  const fetchVidY = () => {
    fetch("http://localhost:8000/getVideoY", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((dataY) => {
        console.log(dataY, "userData");
        setDataY(dataY.data);
      });
  };
  const fetchVidP = () => {
    fetch("http://localhost:8000/getVideoP", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((dataP) => {
        console.log(dataP, "userData");
        setDataP(dataP.data);
      });
  };
  const removeVidS = (id) => {
    if (window.confirm(`Do you want to delete the video`)) {
      fetch("http://localhost:8000/removeVideoS", {
        method: "POST",
        crossDomain: true,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          vidId: id,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          window.location.reload();
          toast.success(data.data);
        });
    }
  };
  const removeVidY = (id) => {
    if (window.confirm(`Do you want to delete the video`)) {
      fetch("http://localhost:8000/removeVideoY", {
        method: "POST",
        crossDomain: true,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          vidId: id,
        }),
      })
        .then((res) => res.json())
        .then((dataY) => {
          window.location.reload();
          toast.success(dataY.data);
        });
    }
  };
  const removeVidP = (id) => {
    if (window.confirm(`Do you want to delete the video`)) {
      fetch("http://localhost:8000/removeVideoP", {
        method: "POST",
        crossDomain: true,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          vidId: id,
        }),
      })
        .then((res) => res.json())
        .then((dataP) => {
          window.location.reload();
          toast.success(dataP.data);
        });
    }
  };
  return (
    <>
      <AdminNav />
      <div>
        <h2>Delete Videos</h2>
        <h3>Sleep</h3>
      </div>
      <div className="homep">
        <div className="table1">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Video URL</th>
                <th>Image URL</th>
                <th>Action</th>
              </tr>
            </thead>
            {data.map((i) => {
              return (
                <tbody>
                  <tr>
                    <td>{i._id}</td>
                    <td>{i.name}</td>
                    <td>{i.vidUrl}</td>
                    <td>{i.imgURL}</td>
                    <td>
                      <button
                        className="buttonRemove"
                        onClick={() => removeVidS(i._id)}
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                </tbody>
              );
            })}
          </table>
        </div>
      </div>
      <h3>Yoga</h3>
      <div className="homep">
        <div className="table1">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Video URL</th>
                <th>Image URL</th>
                <th>Action</th>
              </tr>
            </thead>
            {dataY.map((i) => {
              return (
                <tbody>
                  <tr>
                    <td>{i._id}</td>
                    <td>{i.name}</td>
                    <td>{i.vidUrl}</td>
                    <td>{i.imgURL}</td>
                    <td>
                      <button
                        className="buttonRemove"
                        onClick={() => removeVidY(i._id)}
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                </tbody>
              );
            })}
          </table>
        </div>
      </div> 
      <h3>Productivity</h3>
      <div className="homep">
        <div className="table1">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Video URL</th>
                <th>Image URL</th>
                <th>Action</th>
              </tr>
            </thead>
            {dataP.map((i) => {
              return (
                <tbody>
                  <tr>
                    <td>{i._id}</td>
                    <td>{i.name}</td>
                    <td>{i.vidUrl}</td>
                    <td>{i.imgURL}</td>
                    <td>
                      <button
                        className="buttonRemove"
                        onClick={() => removeVidP(i._id)}
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                </tbody>
              );
            })}
          </table>
        </div>
      </div>
    </>
  );
}

export default DelVid;
