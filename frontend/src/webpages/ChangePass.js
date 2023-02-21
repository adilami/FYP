import React, { useState } from 'react'
import NavigationBar from './Navbar/NavigationBar'

function ChangePass() {
  const [oldPass, setOldPass] = useState("");
  const [newPass, setNewPass] = useState("");
  const [cNewPass, setCNewPass] = useState("");


  return (
    <>
    <NavigationBar />
    <div>ChangePass</div>
    <h3>Old Password</h3>
      <input
        type={"text"}
        placeholder="Old Password"
        onChange={(e) => setOldPass(e.target.value)}
        value={oldPass}
      />
      <h3>New Password</h3>
      <input
        type={"text"}
        placeholder="New Password"
        onChange={(e) => setNewPass(e.target.value)}
        value={newPass}
      />
      <h3>Confirm New Password</h3>
      <input
        type={"text"}
        placeholder="Confirm New Password"
        onChange={(e) => setCNewPass(e.target.value)}
        value={cNewPass}
      />
      <br>
      </br>
      <br></br>
      <button>Change Password</button>
    </>
  )
}

export default ChangePass