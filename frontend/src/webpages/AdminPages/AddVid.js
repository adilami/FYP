import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";
import AdminNav from "../Navbar/AdminNav";

function AddVid() {
  const [name, setName] = useState("");
  const [vid, setVid] = useState("");
  const [imgURL, setImgURL] = useState("");
  const toggleSub = (e) => {
    if (!name || !vid || !imgURL) {
      toast.error("All the fields are required!!!");
    } else {
      if (document.getElementById("sleep").checked) {
        axios.post("http://localhost:8000/addVidS", {
          name: name,
          imgURL: imgURL,
          vidUrl: vid,
        });
        toast.success("Video Details Added Successfully");
        setName("");
        setVid("");
        setImgURL("");
      }
      if (document.getElementById("focus").checked) {
        axios.post("http://localhost:8000/addVidY", {
          name: name,
          imgURL: imgURL,
          vidUrl: vid,
        });
        toast.success("Video Details Added Successfully");
        setName("");
        setVid("");
        setImgURL("");
      }
      if (document.getElementById("productivity").checked) {
        axios.post("http://localhost:8000/addVidP", {
          name: name,
          imgURL: imgURL,
          vidUrl: vid,
        });
        toast.success("Video Details Added Successfully");
        setName("");
        setVid("");
        setImgURL("");
      }
    }
  };
  return (
    <>
      <AdminNav />
      <div>AddVid</div>
      <h3>Name</h3>
      <input
        type={"text"}
        placeholder="Name"
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
      <h3>URL</h3>
      <input
        type={"text"}
        placeholder="Video URL"
        onChange={(e) => setVid(e.target.value)}
        value={vid}
      />
      <h3>Image</h3>
      <input
        type={"text"}
        placeholder="Image URL"
        onChange={(e) => setImgURL(e.target.value)}
        value={imgURL}
      />
      <br></br>
      <h3>Type of Video</h3>
      <input type="radio" id="sleep" name="1" value="y" />
      <label for="sleep" id="sleep">
        Sleep
      </label>
      <br></br>
      <input type="radio" id="focus" name="1" value="y" />
      <label className="labelAdd" for="focus">
        Yoga and Meditation
      </label>
      <br/>
      <input type="radio" id="productivity" name="1" value="y" />
      <label className="labelAdd" for="focus">
        Productivity
      </label>
      <br></br>
      <button onClick={toggleSub}>submit </button>
    </>
  );
}

export default AddVid;
