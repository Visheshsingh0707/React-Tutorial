import React,{useState} from 'react'

export default function TextForm(props) {
    const handleUpClick=()=>{
    //  console.log("UpperCase was clicked"+text);
    let newText=text.toUpperCase();
     setText(newText)
    }
    const handleOnChange=(event)=>{
    //  console.log("on change");
     setText(event.target.value);
    }
    const[text,setText]=useState("Enter text here");
  return (
    <div>
     <h1>{props.heading}</h1>
<div className="mb-3">
  <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
  {/* it is necessary to write onChange as you are passing text as ur value sou also need to update it using onChange */}
<button className="btn" onClick={handleUpClick}>Convert to UpperCase </button> 
</div> 
    </div>
  )
} 
