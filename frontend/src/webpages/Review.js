import React, { useState } from "react";
import NavigationBar from "./Navbar/NavigationBar";

function Review() {
  return (
    <>
      <NavigationBar />
      <div>
        <iframe
          style={{ width: "100%", height: "100vh" }}
          src="https://form.jotform.com/wellbeingappfyp/form"
        ></iframe>
      </div>
    </>
  );
}

export default Review;
