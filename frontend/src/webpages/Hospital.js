import React, { useEffect, useState } from "react";
import NavigationBar from "./Navbar/NavigationBar";
import ktmdata from "../hospitalData/ktm";
import pkrdata from "../hospitalData/pkr";
import "../webpages/hospital.css";
import Paginations from "../pagination";

function Hospital() {
  const [currentPage, setCurrentPage] = useState(1);
  const [post] = useState(10);
  const indexOfLastPost = currentPage * post;
  const indexOfFirstPost = indexOfLastPost - post;
  const currentPostKTM = ktmdata.slice(indexOfFirstPost, indexOfLastPost);
  const currentPostPKR = pkrdata.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = (pageN) => setCurrentPage(pageN);

  let ktm = currentPostKTM.map((items) => {
    return (
      <>
        <tr>
          <td>{items.name}</td>
          <td>{items.location}</td>
          <td>
            {" "}
            <a href={items.maps} target={"_blank"}>
              {items.maps}
            </a>
          </td>
          <td>{items.phone}</td>
        </tr>
      </>
    );
  });
  let pkr = currentPostPKR.map((items) => {
    return (
      <>
        <tr>
          <td>{items.name}</td>
          <td>{items.location}</td>
          <td>
            <a className="anchor" href={items.maps} target={"_blank"}>
              {items.maps}
            </a>
          </td>
          <td>{items.phone}</td>
        </tr>
      </>
    );
  });

  const [PKR, setPKR] = useState(false);
  const [KTM, setKTM] = useState(false);
  const [ALL, setALL] = useState(false);
  const [name, setName] = useState("");
  const [country, setCountry] = useState("");
  async function getLocation() {
    let url = "https://ipinfo.io/json?token=25e719ca57a46f";
    let response = await fetch(url);
    let data = await response.json();
    console.log(data.country);
    console.log(data.city);
    console.log(data.city === "Pokhara");
    if (data.city === "Pokhara") {
      setPKR(true);
      setKTM(false);
      setALL(false);
      setName("Pokhara");
    } else if (data.city === "Kathmandu") {
      setPKR(false);
      setKTM(true);
      setALL(false);
      setName("Kathmandu");
    } else {
      setPKR(false);
      setKTM(false);
      setALL(true);
    }
    setCountry(data.country);
  }
  useEffect(() => {
    getLocation();
    console.log(PKR);
  });
  console.log(PKR);
  return (
    <>
      <NavigationBar />
      <div className="container">
        <div className="row">
          <div className="table-responsive col-lg-12">
            <h1 className="display-5">
              Present country: {country} and City: {name}
            </h1>
            {KTM && (
              <div>
                <h1 className="display-6">Help centers in {name}</h1>
                <table className="table table-hover table-responsive table-striped">
                  <thead className="table-dark">
                    <tr>
                      <th className="header" scope="col">
                        Name
                      </th>
                      <th className="header" scope="col">
                        Location
                      </th>
                      <th className="header" scope="col">
                        Maps Link
                      </th>
                      <th className="header" scope="col">
                        Phone Number
                      </th>
                    </tr>
                  </thead>
                  <tbody className="table-group-divider">{ktm}</tbody>
                </table>
              </div>
            )}
            <div className="homeH">
              {KTM && (
                <h6 className="head5">
                  Showing {currentPostKTM.length}/{ktmdata.length} hospitals
                </h6>
              )}

              <br />
              {KTM && (
                <Paginations
                  post={post}
                  totalPosts={ktmdata.length}
                  paginate={paginate}
                />
              )}
            </div>
          </div>
        </div>

        {PKR && (
          <div className="table1">
            <h1 className="display-6">Help centers in {name}</h1>
            <table className="table  table-hover table-bordered table-striped">
              <thead className="table-dark">
                <tr>
                  <th className="header" scope="col">
                    Name
                  </th>
                  <th className="header" scope="col">
                    Location
                  </th>
                  <th className="header" scope="col">
                    Maps Link
                  </th>
                  <th className="header" scope="col">
                    Phone Number
                  </th>
                </tr>
              </thead>
              <tbody className="table-group-divider">{pkr}</tbody>
            </table>
          </div>
        )}
        <div className="homeH">
        {PKR && (
          <h6 className="head5">
            Showing {currentPostPKR.length}/{pkrdata.length} Hospitals
          </h6>
        )}
        {PKR && (
          <Paginations
            post={post}
            totalPosts={pkrdata.length}
            paginate={paginate}
          />
        )}
        </div>

        {ALL && (
          <div>
            <h1 className="display-6">Help centers in Kathmandu</h1>
            <table className="table table-hover table-bordered table-striped">
              <thead className="table-dark">
                <tr>
                  <th className="header" scope="col">
                    Name
                  </th>
                  <th className="header" scope="col">
                    Location
                  </th>
                  <th className="header" scope="col">
                    Maps Link
                  </th>
                  <th className="header" scope="col">
                    Phone Number
                  </th>
                </tr>
              </thead>
              <tbody className="table-group-divider">{ktm}</tbody>
            </table>
          </div>
        )}
        <div className="homeH">
        {ALL && (
          <h6 className="head5">
            Showing {currentPostKTM.length}/{ktmdata.length} Hospitals
          </h6>
        )}
        <br />

        {ALL && (
          <Paginations
            post={post}
            totalPosts={ktmdata.length}
            paginate={paginate}
          />
        )}
        </div>

        {ALL && (
          <div className="table1">
            <h1 className="display-6">Help centers in Pokhara</h1>
            <table className="table table-hover table-bordered table-striped">
              <thead className="table-dark">
                <tr>
                  <th className="header" scope="col">
                    Name
                  </th>
                  <th className="header" scope="col">
                    Location
                  </th>
                  <th className="header" scope="col">
                    Maps Link
                  </th>
                  <th className="header" scope="col">
                    Phone Number
                  </th>
                </tr>
              </thead>
              <tbody className="table-group-divider">{pkr}</tbody>
            </table>
          </div>
        )}
        <div className="homeH">

        {ALL && (
          <h6 className="head5">
            Showing {currentPostPKR.length}/{pkrdata.length} Hospitals
          </h6>
        )}
        <br />
        {ALL && (
          <Paginations
            post={post}
            totalPosts={pkrdata.length}
            paginate={paginate}
          />
        )}
      </div>
      </div>
    </>
  );
}
export default Hospital;
