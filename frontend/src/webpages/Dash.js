import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";
import NavigationBar from "./Navbar/NavigationBar";
import "./Dash.css"

axios.defaults.withCredentials = true;
let firstRender = false;
function Dash() {
  const [user, setUser] = useState();
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

  // const sendReq = async () => {
  //   try{
  //   const res = await axios
  //     .get("http://localhost:8000/api/refresh", {
  //       withCredentials: true
  //     ,})
  //     console.log(res);
  //   }
  //   catch(e){
  //     if(e.status!==200)
  //     toast.error(e.response.data.message);
  // }
  // };
  // useEffect(() => {
  //   if(firstRender){
  //     firstRender=true;
  //     sendReq().then((data)=>setUser(data.user)) 
  //   }
  //     let int = setInterval(() => {
  //           refreshToken().then((data) => setUser(data));
  //         }, 1000 * 3600);//3600s
  //         return () => clearInterval(int);

  // },[]);
  // const history = useNavigate();

  // const sendReqLogout = async () => {
  //   const res = await axios.post("http://localhost:8000/api/logout",null,{
  //     withCredentials:true
  //   })
  //   // if(redirect){
  //   //   history("/home")
  //   // }
    
  //   if(res.status ===200){
  //     history("/")
  //   }
  //   else{
  //     toast.error("Cant logout!");
  //   }
  // }
  // const toggleLogout=()=>{
  //   localStorage.removeItem("token");
  //     window.location.reload();
  //     sendReqLogout();
  //     toast.success("Logged out Successfully!")
  //   }
  // const togglevid =()=>{
  //   history("/videos")
  // }
  return (
    <>
      {/* <div>
        <h1>Please login to access the dashboard.</h1>
      </div> */}
      <div className="mainPage">
        <div className="navbar1">
        <NavigationBar />
        </div>
        <div className="centerHome">
          <div className="containerHome">
          <div className="card1">
            <h1>The key to a healthy life is having a healthy mind</h1>
           <a className="a" href="/que"><h1>Click here for your Daily Check-in</h1></a>
          </div>
          <div className="card2">
            <h1>Inhale the future, exhale the Past</h1>
           <a className="a" href="/videos"><h1>Click here to watch wellbeing videos</h1></a>

          </div>
          
          </div>
        </div>
      </div>
      
      <ToastContainer />
    </>
  );
}
export default Dash;
