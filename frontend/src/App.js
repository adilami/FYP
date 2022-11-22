import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./AUTH/Login";
import Register from "./AUTH/Register";
import Dash from "./webpages/Dash";
import Hospital from "./webpages/Hospital";
import Que from "./webpages/questions/Que";
import Videos from "./webpages/videos";
const user=localStorage.getItem("token");


function App() {
  
  return (
    <>
      <Routes>
        {user&&<Route exact path="/" element={<Dash />} />}
        {!user&&<Route exact path="/" element={<Login />} />}
        <Route exact path="/register" element={<Register />} />
        {user&&<Route exact path="/home" element={<Dash />} />}
        {user&&<Route exact path="/videos" element={<Videos />} />}
        {user&&<Route exact path="/hospital" element={<Hospital />} />}
        {user&&<Route exact path="/que" element={<Que />} />}
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
    </div>
  );
}
export default App;
