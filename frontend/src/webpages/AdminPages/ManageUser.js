import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import AdminNav from '../Navbar/AdminNav'

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
  const removeUser = (id) => {
    if(window.confirm(`Do you want to delete the user`)){
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

    <div>
      <h1>manageUser</h1>
      </div>
      <table>
          <tr>
            <th>User Id</th>
            <th>UserName</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        {data.map(i=>{
            return(
              <tr>
                <td>{i._id}</td>
                <td>{i.userName}</td>
                <td>{i.email}</td>
                <td><button onClick={()=>removeUser(i._id)}>Remove</button></td>
                </tr>
            )
          })}
      </table>
      </>
  )
}

export default ManageUser