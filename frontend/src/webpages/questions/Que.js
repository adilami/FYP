import React, { useEffect } from "react";
import NavigationBar from "../Navbar/NavigationBar";
import "./que.css";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";

// questions.forEach((v) => {
//   const { id, question } = v;
//   return (initialState[id] = { id, question, isSelected: null });
// });

function Que() {
  const history = useNavigate();
  useEffect(() => {
    console.log();
  });
  const sub = (e) => {
    e.preventDefault();

    // Object.values(questionsValue).map(v=>{
    //     if(v.isSelected == true){

    //       console.log("show video Links");
    //     }
    // });

    // console.log(e);

    if (document.getElementById("sleep").checked) {
      toast.success("Sleep problem");
      history("/sleep");
    }
    if (document.getElementById("focus").checked) {
      toast.success("Focus problem");
      history("/prod");
    }
    if (document.getElementById("both").checked) {
      history("/anxiety");
      toast.success("Anxiety problem");
    }
    if (document.getElementById("none").checked) {
      history("/videos");
      toast.success("Hurray! No problems.");
    }
  };

  return (
    <>
      <NavigationBar />
      <div className="mainDiv">
        <div className="questions">
          <h1>What are the problems that your are facing?</h1>
          <form onSubmit={sub}>
            <ul>
              <li className="questionList">
                <input
                  className="queInput"
                  type="radio"
                  id="sleep"
                  name="1"
                  value="y"
                  onClick={sub}
                />
                <label className="queLabel" for="sleep" id="sleep">
                  Having Problem Sleeping
                </label>
              </li>
              <li className="questionList">
                <input
                  className="queInput"
                  type="radio"
                  id="focus"
                  name="1"
                  value="y"
                  onClick={sub}
                />
                <label className="queLabel" for="focus">
                  Having problem to focus
                </label>
              </li>
              <li className="questionList">
                <input
                  className="queInput"
                  type="radio"
                  id="both"
                  name="1"
                  value="y"
                  onClick={sub}
                />
                <label className="queLabel" for="both">
                  Anxiety problems
                </label>
              </li>
              <li className="questionList">
                <input
                  className="queInput"
                  type="radio"
                  id="none"
                  name="1"
                  value="y"
                  onClick={sub}
                />
                <label className="queLabel" for="none">
                  No problems at the moment
                </label>
              </li>
            </ul>
          </form>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}

export default Que;
