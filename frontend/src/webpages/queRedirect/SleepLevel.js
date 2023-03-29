import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import NavigationBar from "../Navbar/NavigationBar";
import YoutubeEmbed from "../YoutubeEmbed";
function SleepLevel() {
  const [dataP, setDataP] = useState([]);
  const [userId, setUserId] = useState(null);
  const [level2, setLevel2]= useState(false);
  const [level3, setLevel3]= useState(false);
  const [counter, setCounter] = useState(0);
  const [form, setForm] = useState(false);
  const [id, setId] = useState([]);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
;
  useEffect(() => {
    fetchUserP();
  }, []);
  const fetchUserP = () => {
    fetch("http://localhost:8000/getVideoSlevel", {
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

  function handleBlur() {
    console.log(counter.count, "abc blur");
    setCounter(counter + 1);
    handleLevelClick();

    toggleForm();
  }
  


  const toggleForm = () => {
    if(counter.count%10==0){
      setForm(true)
      toast.success("Please fill the review form!!!")
    }

  }
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/home', {
          method: 'GET',
          credentials: 'include'
        });
        const data = await response.json();
        setUserId(data.use._id);
        setLevel2(data.use.SLevel2)
        setLevel3(data.use.SLevel3)
      } catch (error) {
        console.error(error);
      }
    };

    fetchUser();
    fetchCount()
  }, [userId]);
  const handleLevelClick = () => {
    // increment the level count for the current user
    axios
      .put(`http://localhost:8000/sleepCount/${userId}`)
      .then((res) => setCounter(res.data))
      .catch((err) => console.error(err));
  };
  const fetchCount = () => {
    console.log("user", userId);
    axios
      .get(`http://localhost:8000/getsleepCount/${userId}`)
      .then((res) => parseInt(setCounter(res.data.user.prodCount)))
      .catch((err) => console.error(err));
  };
  
  const handleLevel2 = async () => {
    console.log(userId);

      try {
        const timestamp = Date.now();
        const response = await axios.put(
          `http://localhost:8000/api/sLevel2/${userId}`,{
            body: JSON.stringify({timestamp})
          }
        );

        if (response.status === 200) {
          toast.success("Level 2 unlocked!");
          window.location.reload();
        }
      } catch (error) {
        console.error(error);}
  };
  const handleLevel3 = async () => {
    console.log(userId);
    const timestamp = Date.now();


      try {
        const response = await axios.put(
          `http://localhost:8000/api/sLevel3/${userId}`,{
            body: JSON.stringify({timestamp})
          }
        );

        if (response.status === 200) {
          toast.success("Level 3 unlocked!");
          window.location.reload();
        }
      } catch (error) {
        console.error(error);
      }
  };
  return (
    <>
      <NavigationBar />

      {!form && <div>
        <h1>User ID: {userId}</h1>
      <h1> Sleep Videos</h1>
      <h3>Level 1</h3>
      <div className="main-container">
        {newDataLevel1.map((i) => {
          return (
            <>
              {console.log(i.name)}
              <div className="video-container">
                <div className="video-card"   >
                  <div className="video-responsive">
                    <div className="video-responsive">
                    <img
                      className="cardImg"
                      src={i.imgUrl}
                      onClick={() => {
                        setId(i.vidUrl);
                        setDesc(i.description);
                        setTitle(i.name);
                        handleBlur()
                        handleLevel2();

                      }}
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                    ></img>
                    </div>
                  </div>
                  <h5 className="h5">Name: {i.name}</h5>
                  <h5 className="h6">Description: {i.description}</h5>
                  <h1>You clicked {counter} times</h1>
                </div>
              </div>
            </>
          );
        })}
      </div>
      <h3>Level 2</h3>
      
      {level2&&<div className="main-container">
        {newDataLevel2.map((i) => {
          return (
            <>
              {console.log(i.name)}
              <div className="video-container">
                <div className="video-card">
                  <div className="video-responsive">
                  <img
                      className="cardImg"
                      src={i.imgUrl}
                      onClick={() => {
                        setId(i.vidUrl);
                        setDesc(i.description);
                        setTitle(i.name);
                        handleBlur()
                        handleLevel3();

                      }}
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                    ></img>
                  </div>
                  <h5 className="h5">Name: {i.name}</h5>
                  <h5 className="h6">Description: {i.description}</h5>
                </div>
              </div>
            </>
          );
        })}
      </div>}
      <h3>Level 3</h3>
      {level3&&<div className="main-container">
        {newDataLevel3.map((i) => {
          return (
            <>
              {console.log(i.name)}
              <div className="video-container">
                <div className="video-card">
                  <div className="video-responsive">
                  <img
                      className="cardImg"
                      src={i.imgUrl}
                      onClick={() => {
                        setId(i.vidUrl);
                        setDesc(i.description);
                        setTitle(i.name);
                        handleBlur()
                        handleLevel2();

                      }}
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                    ></img>
                  </div>
                  <h5 className="h5">Name: {i.name}</h5>
                  <h5 className="h6">Description: {i.description}</h5>
                </div>
              </div>
            </>
          );
        })}
      </div>}
      <button onClick={handleLevel2}>Level2</button>
        <button onClick={handleLevel3}>Level3</button>

      </div>}
      {form&& <div>
      
        <iframe
          style={{ width: "100%", height: "85vh" }}
          src="https://form.jotform.com/wellbeingappfyp/form"
        ></iframe>
          <button className="sign-in-btn" style={{width:"20%"}} onClick={() => setForm(false)}>Back to videos</button>
        </div>}
        <ToastContainer/>
        <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-xl">
          <div class="modal-content">
            <div class="modal-body">
              <YoutubeEmbed embedId={id} />
              <div
                className="videoData"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  textAlign: "left",
                }}
              >
                <h5 class="modal-title fs-5 text-start">
                  <strong>Name:</strong> {title}
                </h5>
                <h5 class="modal-title fs-5 text-start">
                  <strong>Description:</strong> {desc}
                </h5>
              </div>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
                onClick={() => {
                  window.location.reload();
                }}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SleepLevel;
