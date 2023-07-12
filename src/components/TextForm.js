import React, {useState} from 'react'


function TextForm(props) {

    const [text, setText] = useState("");

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const handleClearClick = () => {
        if(text.trim().length > 0) {
            setText("");
        }
    }
 
    const handleUpperCaseClick = () => {
        if(text.trim().length > 0) {
            let newText = text.toUpperCase();
            setText(newText);
        }
    }

    const handleLowerrCaseClick = () => {
        if(text.trim().length > 0) {
            let newText = text.toLowerCase();
            setText(newText);
        }
    }

    const handleAlternatingCaseClick = () => {
        if(text.trim().length > 0) {
            let newText = "";

            for(let i=0; i<text.length; i++) {
                newText += i%2 === 0 ? text.charAt(i).toLowerCase() : text.charAt(i).toUpperCase(); 
            }
            setText(newText);
        }
    }

    const handleCopyClick = () => {
        if(text.trim().length > 0) {
            navigator.clipboard.writeText(text);
            props.showAlert("success", "Copied to clipboard");
        }
    }

    const getTextLength = (text) => {
        return text.trim().split(/\s+/).filter((word) => { return word !== ""; }).length;
    }

    return (
        <>
            <div className="container my-4" style={props.mode === "light" ? {color: "black"} : {color: "white"}}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" id="myBox" rows="6" value={text} placeholder="Enter text here" onChange={handleOnChange} style={props.mode === "light" ? {backgroundColor: "white", color: "black"} : {backgroundColor: "#212529", color: "white"}}></textarea>
                </div>
                <button className="btn btn-primary mx-1 my-1" onClick={handleClearClick} disabled={text.trim().length === 0}>Clear</button>
                <button className="btn btn-primary mx-1 my-1" onClick={handleUpperCaseClick} disabled={text.trim().length === 0}>UPPER CASE</button>
                <button className="btn btn-primary mx-1 my-1" onClick={handleLowerrCaseClick} disabled={text.trim().length === 0}>lower case</button>
                <button className="btn btn-primary mx-1 my-1" onClick={handleAlternatingCaseClick}  disabled={text.trim().length === 0}>aLtErNaTeInG cAsE</button>
                <button className="btn btn-primary mx-1 my-1" onClick={handleCopyClick} disabled={text.trim().length === 0}>Copy to Clipboard</button>
            </div>
            <div className="container my-2" style={props.mode === "light" ? {color: "black"} : {color: "white"}}>
                <h3>Your text summary</h3>
                <p>{getTextLength(text)} words and {text.length} characters</p>
                <p>{Math.round(0.48 * getTextLength(text))} Seconds read</p>
                <h3>Preview</h3>
                <p>{text.trim().length > 0 ? text : "Enter something to preview it here"}</p>
            </div>
        </>
    )
}

export default TextForm;