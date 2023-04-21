import React from "react";

const Color = (props) => {
    let newval = ("rgb(" + props.color1 +", "+ props.color2 +", "+ props.color3 +")");
    return(
        <div style={{
            height:"200px",
            width:"200px",
            backgroundColor:"yellow",
            borderRadius:"50%",
            marginTop:"2rem",
            position:"relative",
            backgroundColor:newval
        }}
        onClick={props.colorHandler}>
            <div 
            style={{position:"absolute",
            top:"40%",
            marginLeft:"10%",
            width:"80%",
            marginRight:"10%",
            backgroundColor:newval}}
            >
            <p style={{textAlign:"center",backgroundColor:newval}}>{newval}</p>
            </div>
        </div>
    );
}

export default Color;