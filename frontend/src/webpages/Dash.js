import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";

axios.defaults.withCredentials = true;
let firstRender = false;
function Dash() {
  const [User, setUser] = useState();
  const refreshToken = async () => {
    try{
    const res = await axios
      .get("http://localhost:8000/api/refresh", {
        withCredentials: true})
        const data= await res.data
        return data
      
    }
      catch(e){
        toast.error(e);
      }
    
  };

  const sendReq = async () => {
    try{
    const res = await axios
      .get("http://localhost:8000/api/getUser", {
        withCredentials: true
      ,})
      console.log(res);
    }
    catch(e){
      if(e.status!==200)
      toast.error(e.response.data.message);
  }
  };
  useEffect(() => {
    if(firstRender){
      firstRender=true;
      sendReq().then((data)=>setUser(data.user)) 
    }
      let int = setInterval(() => {
            refreshToken().then((data) => setUser(data));
          }, 1000 * 3600);//3600s
          return () => clearInterval(int);

  },[]);
  const history = useNavigate();

  const sendReqLogout = async () => {
    const res = await axios.post("http://localhost:8000/api/logout",null,{
      withCredentials:true
    })
    // if(redirect){
    //   history("/home")
    // }
    
    if(res.status ===200){
      history("/")
    }
    return new Error("Cant logout!")
  }
  const toggleLogout=()=>{
    localStorage.removeItem("token")
    sendReqLogout();
    window.location.reload()
    toast.success("Logged out Successfully!")
    
  }
  const togglevid =()=>{
    history("/videos")
  }
  return (
    <>
      {/* <div>
        <h1>Please login to access the dashboard.</h1>
      </div> */}
      <div>
        <div className="center">
          <h1>Welcome{}</h1>
          <button onClick={toggleLogout}>Sign out</button>
          <button onClick={togglevid}>Videos</button>
          
          <div className="container">
        </div>
        </div>
      </div>
      
      <ToastContainer />
    </>
  );
}
export default Dash;
