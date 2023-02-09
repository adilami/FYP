import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import AdminNav from '../Navbar/AdminNav'
import "./adminPage.css"

function ManageUser() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchUser();
  },[])
  const fetchUser= () =>{
    fetch("http://localhost:8000/getAUser",{
      method: "GET",
    })
    .then((res)=>res.json())
    .then((data)=> {
      console.log(data, "userData");
      setData(data.data);
    })
  }
  const removeUser = (id, userName) => {
    if(window.confirm(`Do you want to delete the user with user name: ${userName}`
  )){
      fetch("http://localhost:8000/removeUser",{
        method:"POST",
        crossDomain: true,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          userId : id
        }),
      })
      .then((res)=>res.json())
      .then((data)=>{
        window.location.reload();
        toast.success(data.data);
        
      })
    }
  }
  return (
    <>
    <AdminNav />
    <h1>Manage User</h1>
    <div className='homep'>
    <div className='table1'>
      </div>
      <table>
        <thead>
          <tr>
            <th>User Id</th>
            <th>UserName</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        {data.map(i=>{
            return(
            <tbody>
              <tr>
                <td>{i._id}</td>
                <td>{i.userName}</td>
                <td>{i.email}</td>
                <td><button className='buttonRemove' onClick={()=>removeUser(i._id, i.userName)}>Remove</button></td>
              </tr>
            </tbody>
            )
          })}
      </table>
      </div>
      </>
  )
}

export default ManageUser