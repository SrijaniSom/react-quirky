import React from "react";
import '../App.css';
const Question = (props) => {
    return(
        <div style={{
            border: '4px solid white',
	        textAlign: 'center',
	        margin: '50px',
            padding:'15px',
        }} onClick={props.click}>
           <div> {props.question}</div> 
        </div>
    );
}

export default Question;