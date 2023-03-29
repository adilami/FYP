import React, { useEffect, useState } from 'react'
import NavigationBar from './Navbar/NavigationBar'
import ktmdata from "../database/ktm"
import pkrdata from "../database/pkr"
import "../webpages/hospital.css";
import Paginations from '../pagination';

function Hospital() {
  const[currentPage, setCurrentPage] = useState(1);
  const[post] = useState(5);
  const indexOfLastPost = currentPage * post;
  const indexOfFirstPost = indexOfLastPost-post;
  const currentPostKTM = ktmdata.slice(indexOfFirstPost, indexOfLastPost)
  const currentPostPKR = pkrdata.slice(indexOfFirstPost, indexOfLastPost)
  const paginate = (pageN) => setCurrentPage(pageN);



    let ktm = currentPostKTM.map ((items)=>{
      return(
        <>
          <tr>
            <td>{items.name}</td>
            <td>{items.location}</td>
            <td> <a href={items.maps} target={'_blank'}>{items.maps}</a></td>
            <td>{items.phone}</td>
          </tr>
        </>
      )
    })
    let pkr = currentPostPKR.map ((items)=>{
      return(
        <>
          <tr>
            <td>{items.name}</td>
            <td>{items.location}</td>
            <td><a className="anchor" href={items.maps} target={'_blank'}>{items.maps}</a></td>
            <td>{items.phone}</td>
          </tr>
        </>
      )
    })
  
    const [PKR, setPKR] = useState(false);
    const [KTM, setKTM] = useState(false);
    const [ALL, setALL] = useState(false);
    const [name, setName] = useState("");
    const [country, setCountry] = useState("");
  async function getLocation(){
    let url = "https://ipinfo.io/json?token=25e719ca57a46f";
    let response = await fetch(url);
    let data = await response.json();
    console.log(data.country);
    console.log(data.city);
  console.log(data.city === "Pokhara")
  if(data.city==="Pokhara"){
     setPKR(true);
     setKTM(false);
     setALL(false);
     setName("Pokhara")
  }
  else if(data.city==="Kathmandu"){
    setPKR(false);
    setKTM(true);
    setALL(false);
    setName("Kathmandu")
 }
 else{
    setPKR(false);
    setKTM(false);
    setALL(true);
 }
 setCountry(data.country)
}
useEffect(()=>{
  getLocation();
  console.log(PKR);
})
console.log(PKR);
  return (
    <>

    <NavigationBar />
    <div className='homeH'>
    <h2>Present country: {country} and City: {name}</h2>
<br></br>
      {KTM && <div className='table1'>
        
      <h3>Help centers in {name}</h3>
      <table className="table table-dark table-hover table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Location</th>
            <th>Maps Link</th>
            <th>Phone Number</th>
          </tr>
        </thead>
        <tbody className="table-group-divider">

          {ktm}
      </tbody>
      </table>
      </div>}
      {KTM&&<h6 className='head5'>Showing {currentPostKTM.length}/{ktmdata.length} hospitals</h6>}
  <br/>
        {KTM && <Paginations post={post} totalPosts={ktmdata.length} paginate={paginate} />}

     {PKR && <div className='table1'>
     <h3>Help centers in {name}</h3>
      <table className="table table-dark table-hover table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Location</th>
            <th>Maps Link</th>
            <th>Phone Number</th>
          </tr>
        </thead>
        <tbody className="table-group-divider">

        {pkr}
        </tbody>
      </table>
    </div>
  }
    {PKR&&<h6 className='head5'>Showing {currentPostPKR.length}/{pkrdata.length} Hospitals</h6>}
   {PKR && <Paginations post={post} totalPosts={pkrdata.length} paginate={paginate}/>}


      {ALL && <div className='table1'>
        <h3>Help centers in Kathmandu</h3>
      <table className="table table-dark table-hover table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Location</th>
            <th>Maps Link</th>
            <th>Phone Number</th>
          </tr>
        </thead>
        <tbody className="table-group-divider">

       {ktm}
       </tbody>
      </table>
      </div>}
   {ALL&&<h6 className='head5'>Showing {currentPostKTM.length}/{ktmdata.length} Hospitals</h6>}
   <br/>

   {ALL && <Paginations post={post} totalPosts={ktmdata.length} paginate={paginate} />}

   {ALL && <div className='table1'>

     <h3>Help centers in Pokhara</h3>
      <table className="table table-dark table-hover table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Location</th>
            <th>Maps Link</th>
            <th>Phone Number</th>
          </tr>
        </thead>
        <tbody className="table-group-divider">

       {pkr}
       </tbody>
      </table>
  </div>}
      </div>
   {ALL&&<h6 className='head5'>Showing {currentPostPKR.length}/{pkrdata.length} Hospitals</h6>}
  <br/>
   {ALL && <Paginations post={post} totalPosts={pkrdata.length} paginate={paginate} />}
      </>
  )
}
export default Hospital