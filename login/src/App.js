import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import Dash from "./Dash"
function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Home" element={<Dash />} />
      </Routes>
    </>
  );
}
export default App;
