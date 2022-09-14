import React, { useState } from 'react';
// import styled from 'styled-components';
// import PropTypes from 'prop-types';

// #region constants

// #endregion

// #region styled-components

// #endregion

// #region functions

// #endregion

// #region component
// const propTypes = {};

// const defaultProps = {};

/**
 * 
 */
const TextForm = (props) => {
    const handleupclick = () => {
        let newText = Text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to UpperCase","success")
    }
    const handleloclick = () => {
        let newText = Text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to LowerCase","success")
    }
    const handleclear = () => {
        let newText = "";
        setText(newText)
        props.showAlert("Enter new paragraph all text clear","success")
    }
    const handlecopyclick = () => {
       navigator.clipboard.writeText(Text);
       props.showAlert("Copy to clipboard","success")
    }
    const handleonchanged = (event) => {
        setText(event.target.value)
    }
    const [Text, setText] = useState('');

    return <>
    <div className='container'>
        <h1  className={`my-4 text-${props.mode==='dark'?'light':'dark'}`}>{props.heading}</h1>
        <div className="mb-3">
            <textarea className={`form-control text-${props.mode==='dark'?'light':'dark'}`} style={{backgroundColor: props.mode==='light'?'white':'rgb(33 37 41)'}} placeholder='Enter Text' value={Text} onChange={handleonchanged} id="myBox" rows="3"></textarea>
        </div>
        <button className="btn  btn-theme mx-1" onClick={handleupclick}><i class="bi bi-arrow-repeat"></i> Upper Case</button>
        <button className="btn  btn-theme mx-1" onClick={handleloclick}><i class="bi bi-arrow-repeat"></i> Lower Case</button>
        <button className="btn  btn-danger mx-1" onClick={handleclear}><i class="bi bi-trash"></i></button>
        <button className="btn  btn-success mx-1"  onClick={handlecopyclick}><i class="bi bi-clipboard"></i></button>
    </div>
    <div className={`container my-3 text-${props.mode==='dark'?'light':'dark'}`}>
        <h3>Your Text Summary</h3>
        <p>{Text.split(" ").length} words and {Text.length} characters</p>
        <p>{0.008*Text.split(" ").length} minutes read</p>
        <h3>Preview</h3>
        <p>{Text.length>0?Text:"Enter some text to preview"}</p>
    </div>
    </>
}

// TextForm.propTypes = propTypes;
// TextForm.defaultProps = defaultProps;
// #endregion

export default TextForm;