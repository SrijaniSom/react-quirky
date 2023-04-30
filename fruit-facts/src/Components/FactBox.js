import React from "react";
const FactBox = (props) => {

    let headingStyle={color: "white",
        textAlign:"center",
        fontSize: "1rem",
        letterSpacing: "2.5px",
        fontWeight:"bold"};
    
    let bodyStyle={color: "white",
        textAlign:"center",
        fontSize: "1rem",
        letterSpacing: "2.5px",
        paddingTop:"0.8rem"};

    let boxStyle={
        paddingTop: "50px",
        paddingBottom: "50px",
        paddingLeft: "15px",
        paddingRight: "15px",
        border: "2px solid #8a83c6",
        marginTop:"1rem"
    }

    return(
        <>
            <div style={boxStyle}>
                <div style={headingStyle}>{props.fruit}</div>
                <div style={bodyStyle}>{props.fact}</div>
            </div>
        </>
    );
}

export default FactBox;