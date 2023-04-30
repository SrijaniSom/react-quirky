import React, {useState} from "react";

const Relish = (props) => {

    const[isHover, setisHover]=useState(false);

    const enterMouseHandler = () => {
        setisHover(true);
    };

    const leaveMouseHandler = () => {
        setisHover(false);
    };

    
    let headingStyle = {
        color: "white",
        textAlign: "center",
        fontSize: "1rem",
        letterSpacing: "2.5px",
        fontWeight: "bold",
        fontSize: "28px"
    };

    let bodyStyle = {
        color: "white",
        textAlign: "center",
        fontSize: "1rem",
        letterSpacing: "2.5px",
        paddingTop: "0.8rem",
        fontSize: "15px"
    };

    let boxStyle = {
        paddingTop: "50px",
        paddingBottom: "50px",
        paddingLeft: "15px",
        paddingRight: "15px",
        border: "2px solid #8a83c6",
        marginTop: "1rem"
    };

    let buttonStyle = {
        background: isHover ? "white" : "#8a83c6",
        color: "black",
        marginLeft: "30%",
        marginRight: "30%",
        width: "40%",
        textAlign: "center",
        marginTop: "1rem",
        cursor:"pointer",
    };
    return (
        <>
            <div style={boxStyle}>
                <div style={headingStyle}>{props.name}</div>
                <div style={bodyStyle}>{props.description}</div>
                <div 
                onMouseEnter={enterMouseHandler}
                onMouseLeave={leaveMouseHandler}
                style={buttonStyle}
                onClick={props.click}>Not Right Now.</div>
            </div>
        </>
    );
}

export default Relish;