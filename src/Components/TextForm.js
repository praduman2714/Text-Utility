import React, {useState} from 'react'


export default function TextForm(props) {

    const handleUpClick = ()=>{
        // console.log("Upper case was clicked");
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase Case" , "success")
    }
    const handleLowClick = () =>{
      let newS = text.toLowerCase();
      setText(newS);
      props.showAlert("Converted to Lower Case" , "success")
    }
    const handleOnChange = (event)=>{
        // console.log("On change was clicked");
        setText(event.target.value);
    }
    const handleCopy = () =>{
      var text = document.getElementById('myBox');
      text.select();
      navigator.clipboard.writeText(text.value);
      document.getSelection().removeAllRanges();
      props.showAlert("Text Copied" , "success")
    }

    const handleExtraSpaces = () =>{
      var newText = text.split(/[ ]+ /);
      setText(newText.join(" "));
      props.showAlert("Extra Spaces Removed" , "success")
    }

    const [text, setText] = useState("");
  return (
    <>
      <div className='container'>
        <h1>{props.title} </h1>
      <div className="mb-3">

            <textarea className="form-control" value={text} onChange={handleOnChange} 
            id="myBox" rows="8" placeholder='Enter your text'></textarea>
        </div>
        <button disabled = {text.length === 0} className='btn btn-primary mx-2' onClick={handleUpClick}>Upper Case</button>
        <button disabled = {text.length === 0} className='btn btn-primary mx-2' onClick={handleLowClick}>Lower Case</button>
        <button disabled = {text.length === 0} className='btn btn-primary mx-2' onClick={handleCopy}>copy Text</button>
        <button disabled = {text.length === 0} className='btn btn-primary mx-2' onClick={handleExtraSpaces}>Trim</button>
    </div>

    <div className='container my-3'>
        <h2>Your Text Summary</h2>
        <p>Your text contains {text.split(" ").filter((a1)=>{return a1.length !== 0}).length} words and {text.length} letters
        </p>
        <p>{0.008 * text.split(" ").filter((a1)=>{return a1.length !== 0}).length} times to read.</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Enter something to preview it here"}</p>
    </div>
    </>
  )
}
