import React from "react";
import { useState } from "react";
import { Form, Button } from "react-bootstrap";

export default function TextForm(props) {
  const [text, setText] = useState("");
  let temp;
  const handleUpperCaseButton = () => {
    let newtext = text.toUpperCase();
    setText(newtext);
    props.showAlert("Text is converted to Uppercase.");
  };
  const handleLowerCaseButton = () => {
    let newtext = text.toLowerCase();
    setText(newtext);
    props.showAlert("Text is converted to Lowercase.");
  };
  const handleclearButton = () => {
    setText("");
    props.showAlert("Text is cleared.");
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const handleCopyToClipBoard = () => {
    navigator.clipboard.writeText(text);
    //alert("Content is copied.");
    props.showAlert("Content is copied to clipboard.");
  };
  const countWords = () => {
    let count = 0;
    for (let index = 0; index < text.split(" ").length; index++) {
      const element = text.split(" ")[index];
      if (element != "") {
        count++;
      }
    }
    return count;
  };
  return (
    <div style={{ color: props.mode == "light" ? "black" : "white" }}>
      <div className="container">
        <div className="my-3">
          <h6>Enter text to Analyze.</h6>
          <textarea
            className="form-control"
            name="mybox"
            id="mybox"
            cols="100"
            rows="10"
            value={text}
            onChange={handleOnChange}
          ></textarea>
          <button className="btn btn-dark my-2" onClick={handleUpperCaseButton}>
            Convert To UpperCase
          </button>
          <button
            className="btn btn-dark my-2 mx-2"
            onClick={handleLowerCaseButton}
          >
            Convert To LowerCase
          </button>
          <button
            className="btn btn-dark my-2 mx-2"
            onClick={handleclearButton}
          >
            Clear Text
          </button>
          <button
            className="btn btn-dark my-2 mx-2"
            onClick={handleCopyToClipBoard}
          >
            Copy To Clip Board
          </button>
        </div>
      </div>
      <div className="container my-2">
        <h2>Your Text Summary</h2>
        <p>{countWords()}</p>
        <p style={{ fontSize: "18px" }}>
          {text.split(" ").length * 0.008} Minutes to Read.
        </p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Enter text to preview here."}</p>
      </div>
    </div>
  );
}
