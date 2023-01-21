import React, { useEffect, useState } from "react";
import NavigationBar from "../Navbar/NavigationBar";
import questions from "../../database/questions";
import "./que.css";
import { toast, ToastContainer } from "react-toastify";

const initialState = {};
questions.forEach((v) => {
  const { id, question } = v;
  return (initialState[id] = { id, question, isSelected: null });
});
function Que() {
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
    }
    if (document.getElementById("focus").checked) {
      toast.success("Focus problem");
    }
    if (document.getElementById("both").checked) {
      toast.success("Both Sleep and Focus problem");
    }
    if (document.getElementById("none").checked) {
      toast.success("No problem");
    }
  };

  return (
    <>
      <NavigationBar />
      <div className="mainDiv">
        <div className="questions">
      <h1>What are the problems that your are facing?</h1>
          <form onSubmit={sub}>
            {/* {questions.map(v=>{
              console.log(v)
              // return <RadioQuestion q={v} {...{questionsValue,setQuestionValue}} />
            })} */}
            <ul>
              <li>
                <input className="queInput" type="radio" id="sleep" name="1" value="y" />
                <label for="sleep" id="sleep">
                  Having Problem Sleeping
                </label>
              </li>
              <li> 
                <input className="queInput" type="radio" id="focus" name="1" value="y" />
                <label for="focus">
                  Having problem to focus
                </label>
              </li>
              <li>
                <input className="queInput" type="radio" id="both" name="1" value="y" />
                <label for="both">Both sleep and focus problems</label>
              </li>
              <li>
                <input className="queInput" type="radio" id="none" name="1" value="y" />
                <label for="none">No problems at the moment</label>
              </li>
            </ul>
          </form>
          <button className="submit" onClick={sub}>Submit</button>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}

export default Que;

// const  RadioQuestion=({q,setQuestionValue,questionsValue})=>{
//   const {id,question} = q
//   return (
//   <>
//   <h1>Questions</h1>
//             <h1>{question}</h1>
//             <input
//               type="radio"
//               id="yes1"
//               name={id}
//               value="y"
//               onClick={() => {
//                 setQuestionValue(temp=>{
//                   return {...temp,[id]:{...temp[id],isSelected:true}}
//                 })

//               }}
//             />
//             <label for="1">Yes</label>
//             <input
//               type="radio"
//               id="no1"
//               name={id}
//               value="n"
//               onClick={() => {
//                 setQuestionValue(temp=>{
//                   return {...temp,[id]:{...temp[id],isSelected:false}}
//                 })
//               }}
//             />
//             <label for="1">No</label>
//             {questionsValue[id].isSelected == false && (<> show someting</>)}
//             </>)
// }