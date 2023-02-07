import React from 'react'
import AdminNav from '../Navbar/AdminNav'

function ManageVid() {
  return (
    <>
    <AdminNav />
    <div>
      <h1>manageVid</h1>
      <h3>Name</h3>
      <input type={'text'} placeholder="Name" /> 
      <h3>URL</h3>
      <input type={'text'} placeholder="URL" /> 
      <h3>Image</h3>
      <input type={'text'} placeholder="Image" /> 
      <button>submit </button>

      </div>
    </>
  )
}

export default ManageVid