import React, { useState } from 'react'


export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log("uppercase was clicked" + text);
        let newText = text.toUpperCase();
        props.showAlert("converted to uppercase", "success");
        setText(newText);
    }
    const handleLoClick = () => {
        // console.log("uppercase was clicked" + text);
        let newText = text.toLowerCase();
        props.showAlert("converted to Lowercase", "success");
        setText(newText);
    }
    const handleCopy = () => {
        var text = document.getElementById("myBox");
        text.select();
        props.showAlert("copied to clipboard", "success");
        navigator.clipboard.writeText(text.value);

    }

    const removeExtraspace = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Remove extraspaces", "success");
    }
    const handleClearClick = () => {
        // console.log("uppercase was clicked" + text);
        let newText = '';
        props.showAlert("Text cleared!", "success");
        setText(newText);
    }
    const handleOnChange = (event) => {
        // console.log("on change");
        setText(event.target.value);

    }
    const [text, setText] = useState('');
    // text = "new text"; //wrong way to change the state
    // setText("set text"); //wrong way to change the state
    return (
        <>
            <div className="container" style={{ color: props.mode === `dark` ? `white` : `#042743` }}>
                <h1>{props.heading} </h1>
                <div className="mb-3">

                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === `dark` ? `grey` : `white`, color: props.mode === `dark` ? `white` : `#042743` }} id="myBox" rows="10"></textarea>
                </div>
                <button className="btn btn-primary mx-2" onClick={handleUpClick}>convert to upparcase</button>
                <button className="btn btn-primary mx-2" onClick={handleLoClick}>convert to Lowercase</button>
                <button className="btn btn-primary mx-2" onClick={handleClearClick}>ClearText</button>
                <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
                <button className="btn btn-primary mx-2" onClick={removeExtraspace}>Remove extraSpace</button>


            </div>
            <div className="container my-3" style={{ color: props.mode === `dark` ? `white` : `#042743` }}>
                <h2>Your text summary</h2>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length}Minutes read</p>
                <h2>preview</h2>
                <p>{text.length > 0 ? text : "Enter something in the textbox above to preview it here"}</p>
            </div>
        </>
    )
}
