import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";
import AdminNav from "../Navbar/AdminNav";

function AddVid() {
  const [name, setName] = useState("");
  const [vid, setVid] = useState("");
  const [description, setDesc] = useState("");
  const [level, setLevel] = useState("");
  const [imageL, setImageL] = useState("");

  const [namelevel, setNamelevel] = useState("");
  const [vidlevel, setVidlevel] = useState("");
  const [descriptionlevel, setDesclevel] = useState("");
  const [imagelevel, setimagelevel] = useState("");
  const [Time, setTime] = useState("");

  const toggleSub = (e) => {
    if (!name || !vid || !description || !imageL) {
      toast.error("All the fields are required!!!");
    } else {
      if (document.getElementById("sleep").checked) {
        axios.post("http://localhost:8000/addVidS", {
          name: name,
          vidUrl: vid,
          imgUrl: imageL,
          description: description,
        });
        toast.success("Video Details Added Successfully");
        setName("");
        setVid("");
        setDesc("");
        setImageL("");
      }
      if (document.getElementById("focus").checked) {
        axios.post("http://localhost:8000/addVidY", {
          name: name,
          vidUrl: vid,
          description: description,
          imgUrl: imageL,
        });
        toast.success("Video Details Added Successfully");
        setName("");
        setVid("");
        setDesc("");
        setImageL("");
      }
      if (document.getElementById("productivity").checked) {
        axios.post("http://localhost:8000/addVidP", {
          name: name,
          vidUrl: vid,
          imgUrl: imageL,
          description: description,
        });
        toast.success("Video Details Added Successfully");
        setName("");
        setVid("");
        setDesc("");
        setImageL("");
      }
    }
  };

  const toggleSub1 = (e) => {
    if (
      !namelevel ||
      !vidlevel ||
      !level ||
      !descriptionlevel ||
      !imagelevel ||
      !Time
    ) {
      toast.error("All the fields are required!!!");
    } else {
      if (document.getElementById("sleeplevel").checked) {
        axios.post("http://localhost:8000/addVidSlevel", {
          name: namelevel,
          vidUrl: vidlevel,
          level: level,
          time: Time,
          imgUrl: imagelevel,
          description: descriptionlevel,
        });
        toast.success("Video Details Added Successfully");
        setNamelevel("");
        setVidlevel("");
        setLevel("");
        setDesclevel("");
        setTime("");
        setimagelevel("");
      }
      if (document.getElementById("focuslevel").checked) {
        axios.post("http://localhost:8000/addVidYlevel", {
          name: namelevel,
          vidUrl: vidlevel,
          level: level,
          time: Time,
          imgUrl: imagelevel,
          description: descriptionlevel,
        });
        toast.success("Video Details Added Successfully");
        setNamelevel("");
        setVidlevel("");
        setLevel("");
        setDesclevel("");
        setTime("");
        setimagelevel("");
      }
      if (document.getElementById("productivitylevel").checked) {
        axios.post("http://localhost:8000/addVidPlevel", {
          name: namelevel,
          vidUrl: vidlevel,
          level: level,
          time: Time,
          imgUrl: imagelevel,
          description: descriptionlevel,
        });
        toast.success("Video Details Added Successfully");
        setNamelevel("");
        setVidlevel("");
        setLevel("");
        setDesclevel("");
        setimagelevel("");
        setTime("");
      }
    }
  };
  return (
    <>
      <AdminNav />
      <div className="center-form">
        <div className="login-form">
          <h1>Add Generic Video</h1>

          <div className="containerLogin">
            <p>Name</p>
            <input
              type={"text"}
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
            <p>URL</p>
            <input
              type={"text"}
              placeholder="Video URL"
              onChange={(e) => setVid(e.target.value)}
              value={vid}
            />
            <p>Image URL</p>
            <input
              type={"text"}
              placeholder="Image URL"
              onChange={(e) => setImageL(e.target.value)}
              value={imageL}
            />
            <p>Description</p>
            <input
              type={"text"}
              placeholder="Description"
              onChange={(e) => setDesc(e.target.value)}
              value={description}
            />
            <br></br>
            <h3>Type of Video</h3>
            <div className="radioDiv">
              <input type="radio" id="sleep" name="1" value="y" />
              <label for="sleep" id="sleep">
                Sleep
              </label>
              <br></br>
              <input type="radio" id="focus" name="1" value="y" />
              <label className="labelAdd" for="focus">
                Yoga and Meditation
              </label>
              <br />
              <input type="radio" id="productivity" name="1" value="y" />
              <label className="labelAdd" for="focus">
                Productivity
              </label>
            </div>
            <br></br>
            <button className="create-acount-btn" onClick={toggleSub}>
              Submit{" "}
            </button>
          </div>
        </div>
        <div className="login-form">
          <h1>Add Leveled Redirect Video</h1>

          <div className="containerLogin">
            <p>Name</p>
            <input
              type={"text"}
              placeholder="Name"
              onChange={(e) => setNamelevel(e.target.value)}
              value={namelevel}
            />
            <p>URL</p>
            <input
              type={"text"}
              placeholder="Video URL"
              onChange={(e) => setVidlevel(e.target.value)}
              value={vidlevel}
            />
            <p>Level</p>
            <input
              type={"number"}
              max="3"
              min="1"
              placeholder="Level"
              onChange={(e) => setLevel(e.target.value)}
              value={level}
            />
            <p>Time</p>
            <input
              type={"number"}
              placeholder="Time"
              onChange={(e) => setTime(e.target.value)}
              value={Time}
            />
            <p>Image URL</p>
            <input
              type={"text"}
              placeholder="Image URL"
              onChange={(e) => setimagelevel(e.target.value)}
              value={imagelevel}
            />
            <p>Description</p>
            <input
              type={"text"}
              placeholder="Description"
              onChange={(e) => setDesclevel(e.target.value)}
              value={descriptionlevel}
            />
            <br></br>
            <h3>Type of Video</h3>
            <div className="radioDiv">
              <input type="radio" id="sleeplevel" name="1" value="y" />
              <label for="sleeplevel" id="sleeplevel">
                Sleep
              </label>
              <br></br>
              <input type="radio" id="focuslevel" name="1" value="y" />
              <label className="labelAdd" for="focuslevel">
                Yoga and Meditation
              </label>
              <br />
              <input type="radio" id="productivitylevel" name="1" value="y" />
              <label className="labelAdd" for="productivitylevel">
                Productivity
              </label>
            </div>
            <br></br>
            <button className="create-acount-btn" onClick={toggleSub1}>
              Submit{" "}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddVid;
