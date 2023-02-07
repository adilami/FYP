import React, { useEffect, useState } from 'react'
import NavigationBar from './Navbar/NavigationBar'
import ktmdata from "../database/ktm"
import pkrdata from "../database/pkr"
import "../webpages/hospital.css";

function Hospital() {

    let ktm = ktmdata.map ((items)=>{
      return(
        <>
        <tbody>
          <tr>
            <td>{items.name}</td>
            <td>{items.location}</td>
            <td>{items.maps}</td>
            <td>{items.phone}</td>
          </tr>
        </tbody>
        </>
      )
    })
    let pkr = pkrdata.map ((items)=>{
      return(
        <>
        <tbody>
          <tr>
            <td>{items.name}</td>
            <td>{items.location}</td>
            <td>{items.maps}</td>
            <td>{items.phone}</td>
          </tr>
        </tbody>
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
    <div className='homep'>
      {KTM && <div className='table1'>
      <h1>{name}</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Location</th>
            <th>Maps Link</th>
            <th>Phone Number</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{ktm}</td>
          </tr>
        </tbody>
      </table>
      </div>}
     {PKR && <div className='table1'>
     <h1>{name}</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Location</th>
            <th>Maps Link</th>
            <th>Phone Number</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{pkr}</td>
          </tr>
        </tbody>
      </table>
      </div>}
      {ALL && <div className='table1'>
        <h1>Kathmandu</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Location</th>
            <th>Maps Link</th>
            <th>Phone Number</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{ktm}</td>
          </tr>
        </tbody>
      </table>
     <h1>Pokhara</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Location</th>
            <th>Maps Link</th>
            <th>Phone Number</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{pkr}</td>
          </tr>
        </tbody>
      </table>
      </div>}
      <h1>Your present country is {country} and your city is {name}</h1>
      </div>
      </>
  )
}
export default Hospital