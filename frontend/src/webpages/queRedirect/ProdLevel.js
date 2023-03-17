import React, { useEffect, useState } from "react";
import JotForm from "../Review";
import NavigationBar from "../Navbar/NavigationBar";
import YoutubeEmbed from "../YoutubeEmbed";
function ProdLevel() {
  const [dataP, setDataP] = useState([]);
  useEffect(() => {
    fetchUserP();
  }, []);
  const fetchUserP = () => {
    fetch("http://localhost:8000/getVideoPlevel", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((dataP) => {
        setDataP(dataP.data);
      });
  };
  const newDataLevel1 = dataP.filter((i) => {
    if (i.level == "1") {
      return i;
    }
  });
  const newDataLevel2 = dataP.filter((i) => {
    if (i.level == "2") {
      return i;
    }
  });
  const newDataLevel3 = dataP.filter((i) => {
    if (i.level == "3") {
      return i;
    }
  });
  return (
    <>
      <NavigationBar />

  <h1> Productivity Videos</h1>
      <h3>Level 1</h3>
      <div className="main-container">
        {newDataLevel1.map((i) => {
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
      <h3>Level 2</h3>
      <div className="main-container">
        {newDataLevel2.map((i) => {
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
              <h3>Level 3</h3>
              <div className="main-container">
                {newDataLevel3.map((i) => {
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
              
             
    </>
  );
}

export default ProdLevel;
