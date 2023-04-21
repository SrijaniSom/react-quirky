import React from "react";
const Shoutinput = (props) => {
    return(
        <div>
            <input placeholder="Enter what you desire!" 
            type="text"
            style={{
            marginTop:"2rem",
            marginBottom:"1rem",
            border: "white 2px solid",
            paddingTop:"10px",
            paddingBottom:"10px",
            paddingRight:"15px",
            paddingLeft:"15px"
            }}
            onChange={props.shouthandler}></input>
        </div>
    );
}

export default Shoutinput;