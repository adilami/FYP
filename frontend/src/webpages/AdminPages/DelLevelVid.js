import React, { useEffect, useState } from 'react'
import { toast } from "react-toastify";
import AdminNav from "../Navbar/AdminNav";

function DelLevelVid() {
  const [data, setData] = useState([]);
  const [dataY, setDataY] = useState([]);
  const [dataP, setDataP] = useState([]);

  
  useEffect(() => {
    fetchVidS();
    fetchVidY();
    fetchVidP();
  }, []);
  const fetchVidS = () => {
    fetch("http://localhost:8000/getVideoSlevel", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userData");
        setData(data.data);
      });
  };
  const fetchVidY = () => {
    fetch("http://localhost:8000/getVideoYlevel", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((dataY) => {
        console.log(dataY, "userData");
        setDataY(dataY.data);
      });
  };
  const fetchVidP = () => {
    fetch("http://localhost:8000/getVideoPlevel", {
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
      fetch("http://localhost:8000/removeVideoSlevel", {
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
      fetch("http://localhost:8000/removeVideoYlevel", {
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
      fetch("http://localhost:8000/removeVideoPlevel", {
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
        <h2>Manage Leveled Videos</h2>
        <h3>Sleep</h3>
      </div>
        <div className="table1">
          <table className="table table-dark table-hover table-striped">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Video URL</th>
                <th>Level</th>
                <th>Action</th>
              </tr>
            </thead>
            {data.map((i) => {
              return (
                <tbody  className="table-group-divider">
                  <tr>
                    <td>{i._id}</td>
                    <td>{i.name}</td>
                    <td>{i.vidUrl}</td>
                    <td>{i.level}</td>
                    <td>
                      <button
                        type="button" class="btn btn-outline-danger btn-sm"
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
      <h3>Yoga</h3>
        <div className="table1">
          <table className="table table-dark table-hover table-striped">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Video URL</th>
                <th>Level</th>
                <th>Action</th>
              </tr>
            </thead>
            {dataY.map((i) => {
              return (
                <tbody  className="table-group-divider">
                  <tr>
                    <td>{i._id}</td>
                    <td>{i.name}</td>
                    <td>{i.vidUrl}</td>
                    <td>{i.level}</td>
                    {console.log(i.level)}
                    <td>
                      <button
                        type="button" class="btn btn-outline-danger btn-sm"
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
      <h3>Productivity</h3>
        <div className="table1">
          <table className="table table-dark table-hover table-striped">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Video URL</th>
                <th>Level</th>
                <th>Action</th>
              </tr>
            </thead>
            {dataP.map((i) => {
              return (
                <tbody  className="table-group-divider">
                  <tr>
                    <td>{i._id}</td>
                    <td>{i.name}</td>
                    <td>{i.vidUrl}</td>
                    <td>{i.level}</td>
                    <td>
                      <button
                        type="button" class="btn btn-outline-danger btn-sm"
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
    </>
  );
}

export default DelLevelVid