import React, {useState} from 'react'



export default function TextForm (props) {

    const [text,setText] = useState('Enter text here');

    function handleOnChange(event){
        setText(event.target.value);
    }

    function handleUpClick() {
        let newtext=text.toUpperCase();
        setText(newtext);
        props.showAlert("Converted to Uppercase","success");
    }

    function handleLowClick() {
        let newtext=text.toLowerCase();
        setText(newtext);
        props.showAlert("Converted to Lowercase","success");
    }

    function handleClearText() {
        setText("");
        props.showAlert("Text Cleared","success");
    }

    function handleCopyText() {
        let newtext=document.getElementById("myBox");
        newtext.select();
        navigator.clipboard.writeText(newtext.value);
        props.showAlert("Copied to clipboard","success");
    }

    function handleExtraSpace() {
        let newtext=text.split(/[ ]+/);
        setText(newtext.join(" "))
        props.showAlert("Extra spaces removed","success");
    }


  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h1 >{props.heading}</h1>
         <div className="mb-3">
            <label for="myBox" className="form-label"></label>
            <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8" style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'#042743'}}></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-2" onClick={handleCopyText}>Copied to Clipboard</button>
        <button className="btn btn-primary mx-2" onClick={handleExtraSpace}>Remove Extra Space</button>
        <button className="btn btn-primary mx-2" onClick={handleClearText}>Clear</button>
        
    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h2>Your text summary</h2>
        <p>{text.split(" ").length } words, {text.length} character</p>
        <p>{.008 * text.split(" ").length} minutes read</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>
  )
}
