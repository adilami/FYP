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
  const Sleep = data.map((i) => {
    return (
      <tr>
        <td>{i._id}</td>
        <td>{i.name}</td>
        <td>{i.vidUrl}</td>
        <td>
          <button
            type="button"
            class="btn btn-outline-danger btn-sm"
            onClick={() => removeVidS(i._id)}
          >
            Remove
          </button>
        </td>
      </tr>
    );
  });

  const Yoga = dataY.map((i) => {
    return (
      <tr>
        <td>{i._id}</td>
        <td>{i.name}</td>
        <td>{i.vidUrl}</td>
        {console.log(i.level)}
        <td>
          <button
            type="button"
            class="btn btn-outline-danger btn-sm"
            onClick={() => removeVidY(i._id)}
          >
            Remove
          </button>
        </td>
      </tr>
    );
  });

  const Prod = dataP.map((i) => {
    return (
        <tr>
          <td>{i._id}</td>
          <td>{i.name}</td>
          <td>{i.vidUrl}</td>
          <td>
            <button
              type="button"
              class="btn btn-outline-danger btn-sm"
              onClick={() => removeVidP(i._id)}
            >
              Remove
            </button>
          </td>
        </tr>
    );
  });
  return (
    <>
      <AdminNav />
      <div>
        <h1 className="display-5">Manage Generic Videos</h1>
        <h1 className="display-6">Sleep</h1>
      </div>
      <div className="homeH">
        <div className="table1">
          <table className="table table-bordered table-hover table-striped">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Video URL</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody className="table-group-divider">{Sleep}</tbody>
          </table>
        </div>
      </div>
      <h1 className="display-6">Yoga</h1>
      <div className="homeH">
        <div className="table1">
          <table className="table table-bordered table-hover table-striped">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Video URL</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody className="table-group-divider">{Yoga}</tbody>
          </table>
        </div>
      </div>
      <h1 className="display-6">Productivity</h1>
      <div className="homeH">
        <div className="table1">
          <table className="table table-bordered table-hover table-striped">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Video URL</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody className="table-group-divider">{Prod}</tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default DelVid;
