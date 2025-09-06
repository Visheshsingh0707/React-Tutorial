import React,{useState} from 'react'

export default function TextForm(props) {
    const handleUpClick=()=>{
    //  console.log("UpperCase was clicked"+text);
    let newText=text.toUpperCase();
     setText(newText)
    }
     const handledownClick=()=>{
    //  console.log("LowerCase was clicked"+text);
    let newText=text.toLowerCase();
     setText(newText)
    }
     const handleClearClick=()=>{
    //  console.log("LowerCase was clicked"+text);
    let newText='';
     setText(newText)
    }
    const handleOnChange=(event)=>{
    //  console.log("on change");
     setText(event.target.value);
    }
    const[text,setText]=useState("Enter text here");
  return (
    <>
 <div className="container">
     <h1>{props.heading}</h1>
     <div className="mb-3">
     <textarea className="form-control my-2" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
     {/* it is necessary to write onChange as you are passing text as ur value sou also need to update it using onChange  */}
     <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to UpperCase </button> 
     <button className="btn btn-primary mx-1" onClick={handledownClick}>Convert to LowerCase </button> 
     <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear All </button> 
     </div> 
</div>
<div className="container my-3">
   <h1>Your Text Summary</h1>
   <p>{text.split(" ").length}Words and {text.length}Characters</p>
   <p>{.008 * text.split(" ").length}Minutes to read</p>
   <h3>Preview</h3>
   <p>{text}</p>
</div>
</>
  )
} 
