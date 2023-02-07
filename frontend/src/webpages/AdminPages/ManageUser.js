import React from 'react'
import AdminNav from '../Navbar/AdminNav'

function ManageUser() {
  return (
    <>
    <AdminNav />

    <div>
      <h1>manageUser</h1>
      </div>
      <table>
        <thead>
          <th>UserName</th>
          <th>Email</th>
          <th>Action</th>
        </thead>
        <tbody>
          
        </tbody>
      </table>
      </>
  )
}

export default ManageUser