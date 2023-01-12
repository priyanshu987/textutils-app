import React, {useState} from 'react'



export default function TextForm(props) {
    const handleUpClick = () =>{
        console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to UpperCase","success")
    }

    const handleLowClick = () =>{
        console.log("Lowercase was clicked" + text);
        let newText = text.toLowerCase();
        
        setText(newText)
        props.showAlert("Converted to LowerCase","success")
    }

    const handleOnChange = (event) =>{
        console.log("On change");
        setText(event.target.value);
    }

    const [text, setText] = useState('')

  return (
      <>
    <div className = "container" style = {{color: props.mode==='dark'?'white':'black'}}>
      <h1>{props.heading}</h1>
    <div class="mb-3">
        
        <textarea className= "form-control" value ={text} onChange = {handleOnChange} style = {{backgroundColor: props.mode==='dark'? 'grey':'white', color: props.mode==='dark'?'white':'black'}} id = "myBox" rows ="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleLowClick} >Convert to Lowercase</button>
    </div>
    <div className='container my-3' style = {{color: props.mode==='dark'?'white':'black'}}>
        <h1>Your text summary</h1>
        <p>{text.split(" " || "\n").length} words {text.length} characters</p>
        <h2>Preview</h2>
        <p>{text.length>0?text : "Enter something above to preview" }</p>

    </div>
    </>
    
  )
}
