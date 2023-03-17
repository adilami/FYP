import React, { useEffect, useState } from "react";
import { Routes, Route, Form } from "react-router-dom";
import Admin from "./AUTH/Admin";
import Login from "./AUTH/Login";
import Register from "./AUTH/Register";
import AddVid from "./webpages/AdminPages/AddVid";
import ManageUser from "./webpages/AdminPages/ManageUser";
import Dash from "./webpages/Dash";
import Hospital from "./webpages/Hospital";
import Que from "./webpages/questions/Que";
import Videos from "./webpages/videos";
import DelVid from "./webpages/AdminPages/DelVid";
import ChangePass from "./webpages/ChangePass";
import AdminDash from "./webpages/AdminPages/AdminDash";
import DelLevelVid from "./webpages/AdminPages/DelLevelVid";
import ProdLevel from "./webpages/queRedirect/ProdLevel";
import SleepLevel from "./webpages/queRedirect/SleepLevel";
import AnxietyLevel from "./webpages/queRedirect/AnxietyLevel";
import Review from "./webpages/Review";
import FetchReview from "./webpages/AdminPages/FetchReview";
const user=localStorage.getItem("token");
const admin = localStorage.getItem("tokenAdmin")


function App() {  
  return (
    <>
      <Routes>
        {user && <Route exact path="/" element={<Dash />} />}
        {!user&&<Route exact path="/" element={<Login />} />}
        <Route exact path="/adminLogin" element={<Admin />} />
        {admin&&<Route exact path="/adminDash" element={<AdminDash />} />}
        {admin&&<Route exact path="/addVid" element={<AddVid />} />}
        {admin&&<Route exact path="/deleteVid" element={<DelVid />} />}
        {admin&&<Route exact path="/deleteLevelVid" element={<DelLevelVid />} />}
        {admin&&<Route exact path="/manageUser" element={<ManageUser />} />}
        {admin&&<Route exact path="/fetchReview" element={<FetchReview />} />}
        <Route exact path="/register" element={<Register />} />
        {user&&<Route exact path="/home" element={<Dash />} />}
        {user&&<Route exact path="/videos" element={<Videos />} />}
        {user&&<Route exact path="/hospital" element={<Hospital />} />}
        {user&&<Route exact path="/que" element={<Que />} />}
        {user&&<Route exact path="/changePassword" element={<ChangePass />} />}
        {user&&<Route exact path="/prod" element={<ProdLevel />} />}
        {user&&<Route exact path="/sleep" element={<SleepLevel />} />}
        {user&&<Route exact path="/anxiety" element={<AnxietyLevel />} />}
        {user&&<Route exact path="/review" element={<Review />} />}

        
        <Route path="*" element={<PageNotFound />}/>
      </Routes>
    </>
  );
}
function PageNotFound(){
  return (
    <div className>
      {user&&<h1>404 Error! <br></br>Page not Found</h1>}
      {!user&&<h1>UnAuthorized Access <br></br>Log In Instead
      </h1>}
      <a href="/">Click here to proceed to login page/homepage(if signed in)</a>
    </div>
  );
}
export default App;
