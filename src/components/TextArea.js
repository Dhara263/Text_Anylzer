// import { useSate } from "react";
import React, {useState} from 'react'

export default function TextArea(props){

const btnclick=()=>{
console.log("btn clicked");
let newText =text.toUpperCase();
setText(newText);

}


const textclick=(event)=>{
  console.log("text clicked");
  setText(event.target.value);
  }
const lowerClick=()=>{
  let newText =text.toLowerCase();
  setText(newText);
  }
  const clearClick=()=>{
  let newText ='';
  setText(newText);
  }
  
const [text,setText] = useState('Enter your text here');

return(
<>
    <div className="form-group">
    <label for="exampleFormControlTextarea1">{props.label}</label>
    <textarea className="form-control" value={text} onChange={textclick} id="exampleFormControlTextarea1" rows="8"></textarea>
    <button type="button" className="btn btn-success mx-1" onClick={btnclick} >Uppercase</button>
    <button type="button" className="btn btn-success mx-1" onClick={lowerClick} >LowerCase</button>
    <button type="button" className="btn btn-success mx-1" onClick={clearClick} >Clear Text</button>
</div>
<div className="container">
  
    <p>text is{text.length},words is {text.split(" ").length}</p>
    <p>reading minit{0.08 * text.split(" ").length}</p>
    <h2>Preview</h2>
    <p>{text}</p>
    </div>

  </>
);


}