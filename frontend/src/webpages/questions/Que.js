import React, { useEffect, useState } from "react";
import NavigationBar from "../Navbar/NavigationBar";
import questions from "../../database/questions";
import "./que.css";
import { toast, ToastContainer } from "react-toastify";

const initialState = {};
questions.forEach(v=>{
  const {id,question}=v;
  return initialState[id] = {id,question,isSelected:null}; 
}); 

function Que() {
  useEffect(() => {
    console.log();
  });
  // const queid =()=>{

  // }
  const [questionsValue, setQuestionValue] = useState(initialState)

  const [no1, setno1] = useState(false);
  const [no2, setno2] = useState(false);
  const [no3, setno3] = useState(false);
  const [no4, setno4] = useState(false);
 
  

  const sub = (e) => {
    e.preventDefault();

    Object.values(questionsValue).map(v=>{
        if(v.isSelected == true){
          
          console.log("show video Links");
        }
    });


    let yesAns = []
    

    console.log(e);
    // if (document.getElementById("no1", "no2", "no3", "yes4").checked) {
    //   toast.success(
    //     "Sleep problem and locak of mot and bad mood and depressed"
    //   );
    // } else {
    //   toast.success("Normal");
    // }
    // if (document.getElementById("no1" && "no2" && "no3").checked) {
    //   toast.success("Sleep problem and locak of mot and bad mood ");
    // } else if (document.getElementById("no1" && "no2" && "yes4").checked) {
    //   toast.success("Sleep problem and locak of mot and depressed ");
    // } else if (document.getElementById("no1" && "no2").checked) {
    //   toast.success("Sleep problem and locak of mot and bad mood ");
    // } else if (
    //   document.getElementById("yes1" && "no2" && "yes3" && "no4").checked
    // ) {
    //   toast.success("Lack of motivation");
    // } else if (
    //   document.getElementById("yes1" && "yes2" && "no3" && "no4").checked
    // ) {
    //   toast.success("Bad mood");
    // } else if (
    //   document.getElementById("yes1" && "yes2" && "yes3" && "yes4").checked
    // ) {
    //   toast.success("Depressed");
    // } else if (document.getElementById("no1" && "no2" && "yes4").checked) {
    //   toast.success("Sleep problem and locak of mot and depressed");
    // } else if (document.getElementById("no1" && "no3" && "yes4").checked) {
    //   toast.success("Sleep problem bad mood and depressed");
    // } else if (document.getElementById("no2" && "no3" && "yes4").checked) {
    //   toast.success("  locak of mot bad mood depressed");
    // } else if (document.getElementById("no3" && "yes4" && "no1").checked) {
    //   toast.success("Sleep problem and bad mood and depressed");
    // } else if (document.getElementById("no1" && "no2").checked) {
    //   toast.success("Sleep problem and locak of mot");
    // } else if (document.getElementById("no1" && "no3").checked) {
    //   toast.success("Sleep problem and bad mood");
    // } else if (document.getElementById("no1" && "yes4").checked) {
    //   toast.success("Sleep problem and depressed");
    // } else if (document.getElementById("no2" && "no3").checked) {
    //   toast.success("Not motivated and bad mood");
    // } else if (document.getElementById("no2" && "yes4").checked) {
    //   toast.success("Depressed and not motivated");
    // } else if (document.getElementById("no3" && "yes4").checked) {
    //   toast.success("Depressed and bad mood");
    // } else if (
    //   document.getElementById("no1" && "yes2" && "yes3" && "no4").checked
    // ) {
    //   toast.success("Sleep problem");
    // } else if (
    //   document.getElementById("yes1" && "no2" && "yes3" && "no4").checked
    // ) {
    //   toast.success("Lack of motivation");
    // } else if (
    //   document.getElementById("yes1" && "yes2" && "yes3" && "yes4").checked
    // ) {
    //   toast.success("Depressed");
    // }
  };

  console.log("questionsValue",questionsValue)

  return (
    <>
      <div>
        <NavigationBar />
        <div className="questions">
          <form onSubmit={sub}>
            {questions.map(v=>{
              console.log(v)
              return <RadioQuestion q={v} {...{questionsValue,setQuestionValue}} />
            })}
            <h1>Questions</h1>
            <h1>{questions[0].question}</h1>
            <input
              type="radio"
              id="yes1"
              name="1"
              value="y"
              onClick={() => {
                setno1(false);

              }}
            />
            <label for="1">Yes</label>
            <input
              type="radio"
              id="no1"
              name="1"
              value="n"
              onClick={() => {
                setno1(true);
              }}
            />
            <label for="1">No</label>
            {no1 && (
              <div className="one">
                <h1>{questions[7].question}</h1>
                <div className="rb">
                  <input type="radio" id="yes8" name="8" value="y" />
                  <label for="8">Yes</label>
                  <input type="radio" id="no8" name="8" value="n" />
                  <label for="8">No</label>
                </div>
                <h1>{questions[8].question}</h1>
                <div className="rb">
                  <input type="radio" id="yes9" name="9" value="y" />
                  <label for="9">Yes</label>
                  <input type="radio" id="no9" name="9" value="n" />
                  <label for="9">No</label>
                </div>
              </div>
            )}
            {/* <button onClick={()=>yes(questions[0].id)}>Yes</button>
        <button onClick={no}>No</button> */}
            <h1>{questions[1].question}</h1>
            <input
              type="radio"
              id="yes2"
              name="2"
              value="y"
              onClick={() => {
                setno2(false);
              }}
            />
            <label for="2">Yes</label>
            <input
              type="radio"
              id="no2"
              name="2"
              value="n"
              onClick={() => {
                setno2(true);
              }}
            />
            <label for="2">No</label>
            {no2 && (
              <div className="one">
                <h1>{questions[9].question}</h1>
                <div className="rb">
                  <input type="radio" id="yes10" name="10" value="y" />
                  <label for="10">Yes</label>
                  <input type="radio" id="no10" name="10" value="n" />
                  <label for="10">No</label>
                </div>
                <h1>{questions[10].question}</h1>
                <div className="rb">
                  <input type="radio" id="yes11" name="11" value="y" />
                  <label for="11">Yes</label>
                  <input type="radio" id="no11" name="11" value="n" />
                  <label for="11">No</label>
                </div>
              </div>
            )}
            <h1>{questions[2].question}</h1>
            <input
              type="radio"
              id="yes3"
              name="3"
              value="y"
              onClick={() => {
                setno3(false);
              }}
            />
            <label for="3">Yes</label>
            <input
              type="radio"
              id="no3"
              name="3"
              value="n"
              onClick={() => {
                setno3(true);
              }}
            />
            <label for="3">No</label>
            {no3 && (
              <div className="one">
                <h1>{questions[11].question}</h1>
                <div className="rb">
                  <input type="radio" id="yes12" name="12" value="y" />
                  <label for="12">Yes</label>
                  <input type="radio" id="no12" name="12" value="n" />
                  <label for="12">No</label>
                </div>
                <h1>{questions[12].question}</h1>
                <div className="rb">
                  <input type="radio" id="yes13" name="13" value="y" />
                  <label for="13">Yes</label>
                  <input type="radio" id="no13" name="13" value="n" />
                  <label for="13">No</label>
                </div>
              </div>
            )}
            <h1>{questions[3].question}</h1>
            <input
              type="radio"
              id="yes4"
              name="4"
              value="y"
              onClick={() => {
                setno4(true);
              }}
            />
            <label for="4">Yes</label>
            <input
              type="radio"
              id="no4"
              name="4"
              value="n"
              onClick={() => {
                setno4(false);
              }}
            />
            <label for="4">No</label>
            {no4 && (
              <div className="one">
                <h1>{questions[13].question}</h1>
                <div className="rb">
                  <input type="radio" id="yes14" name="14" value="y" />
                  <label for="14">Yes</label>
                  <input type="radio" id="no14" name="14" value="n" />
                  <label for="14">No</label>
                </div>
                <h1>{questions[14].question}</h1>
                <input type="radio" id="yes15" name="15" value="y" />d
                <label for="15">Yes</label>
                <input type="radio" id="no15" name="15" value="n" />
                <label for="15">No</label>
                <h1>{questions[15].question}</h1>
                <input type="radio" id="yes16" name="16" value="y" />
                <label for="16">Yes</label>
                <input type="radio" id="no16" name="16" value="n" />
                <label for="16">No</label>
              </div>
            )}
            <h1>{questions[4].question}</h1>
            <input type="radio" id="yes5" name="5" value="y" />
            <label for="5">Yes</label>
            <input type="radio" id="no5" name="5" value="n" />
            <label for="5">No</label>
            <h1>{questions[5].question}</h1>
            <input type="radio" id="yes6" name="6" value="y" />
            <label for="6">Yes</label>
            <input type="radio" id="no6" name="6" value="n" />
            <label for="6">No</label>
            <h1>{questions[6].question}</h1>
            <input type="radio" id="yes7" name="7" value="y" />
            <label for="7">Yes</label>
            <input type="radio" id="no7" name="7" value="n" />
            <label for="7">No</label>
            <br />
            <br />
            <button onClick={sub}>Submit</button>
          </form>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}

export default Que;


const  RadioQuestion=({q,setQuestionValue,questionsValue})=>{
  const {id,question} = q
  return (
  <>
  <h1>Questions</h1>
            <h1>{question}</h1>
            <input
              type="radio"
              id="yes1"
              name={id}
              value="y"
              onClick={() => {
                setQuestionValue(temp=>{
                  return {...temp,[id]:{...temp[id],isSelected:true}}
                })

              }}
            />
            <label for="1">Yes</label>
            <input
              type="radio"
              id="no1"
              name={id}
              value="n"
              onClick={() => {
                setQuestionValue(temp=>{
                  return {...temp,[id]:{...temp[id],isSelected:false}}
                })
              }}
            />
            <label for="1">No</label>
            {questionsValue[id].isSelected == false && (<> show someting</>)}
            </>)
}