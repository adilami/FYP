import axios from "axios";
import React, { useEffect, useState } from "react";

import { toast, ToastContainer } from "react-toastify";
import NavigationBar from "../Navbar/NavigationBar";
import YoutubeEmbed from "../YoutubeEmbed";
axios.defaults.withCredentials = true;

function ProdLevel() {
  const [dataP, setDataP] = useState([]);
  const [userId, setUserId] = useState(null);
  const [counter, setCounter] = useState(0);
  const [form, setForm] = useState(false);

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
    if (i.level === "1") {
      return i;
    }
  });
  const newDataLevel2 = dataP.filter((i) => {
    if (i.level === "2") {
      return i;
    }
  });
  const newDataLevel3 = dataP.filter((i) => {
    if (i.level === "3") {
      return i;
    }
  });
  function handleBlur() {
    console.log(counter.count, "abc blur");
    setCounter(counter + 1);
    handleLevelClick();

    toggleForm();
  }

  function handleFocus() {
    console.log("document focused");
  }
  React.useEffect(() => {
    window.addEventListener("focus", handleFocus);
    window.addEventListener("blur", handleBlur);
    return () => {
      window.removeEventListener("focus", handleFocus);
      window.removeEventListener("blur", handleBlur);
    };
  });

  const toggleForm = () => {
    if (counter.count % 10 == 0) {
      setForm(true);
      toast.success("Please fill the review form!!!");
    }
    console.log("abc");
  };
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/home", {
          method: "GET",
          credentials: "include",
        });
        const data = await response.json();
        setUserId(data.use._id);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUser();
    fetchCount();
  }, [userId]);

  // useEffect(() => {
  //   // retrieve the counter values for the current user on mount
  //   axios.get(`http://localhost:8000/prodCount/${userId}`)
  //     .then(res => setCounter(res.data))
  //     .catch(err => console.error(err));},[userId]);

  const handleLevelClick = () => {
    // increment the level count for the current user
    axios
      .put(`http://localhost:8000/prodCount/${userId}`)
      .then((res) => setCounter(res.data))
      .catch((err) => console.error(err));
  };
  const fetchCount = () => {
    console.log("user", userId);
    axios
      .get(`http://localhost:8000/getprodCount/${userId}`)
      .then((res) => parseInt(setCounter(res.data.user.prodCount)))
      .catch((err) => console.error(err));
  };
  return (
    <>
      <NavigationBar />

      {!form && (
        <div>
          <h1 className="text-3xl font-bold underline"> Productivity Videos</h1>
          <h1>Level 1</h1>
          {/* {userId&&<h3>Count: {(counter.count)}</h3>} */}
          {userId ? <h1>User ID: {userId}</h1> : <h1>Loading user ID...</h1>}
          {userId && <h1>Counter: {counter.count}</h1>}
          <div className="main-container">
            {newDataLevel1.map((i) => {
              return (
                <>
                  {console.log(i.name)}
                  <div className="video-container">
                    <div className="video-card">
                      <div className="video-responsive">
                        <div className="video-responsive">
                          <iframe
                            width="853"
                            height="480"
                            src={`https://www.youtube.com/embed/${i.vidUrl}`}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            title="Embedded youtube"
                            id="Frame"
                          ></iframe>
                        </div>
                      </div>
                      <h5 className="h5">Name: {i.name}</h5>
                      <h5 className="h6">Description: {i.description}</h5>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
          <h1>Level 2</h1>

          <div className="main-container">
            {newDataLevel2.map((i) => {
              return (
                <>
                  <header class="bg-white shadow">
                    <div class="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
                      <h1 class="text-3xl font-bold tracking-tight text-gray-900">
                        Dashboard
                      </h1>
                    </div>
                  </header>
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
          <h1>Level 3</h1>
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
        </div>
      )}
      {form && (
        <div>
          <iframe
            style={{ width: "100%", height: "85vh" }}
            src="https://form.jotform.com/wellbeingappfyp/form"
          ></iframe>
          <button
            className="sign-in-btn"
            style={{ width: "20%" }}
            onClick={() => setForm(false)}
          >
            Back to videos
          </button>
        </div>
      )}
      <ToastContainer />
    </>
  );
}

export default ProdLevel;
