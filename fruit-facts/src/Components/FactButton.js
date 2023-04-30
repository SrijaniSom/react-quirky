import React, { useState } from "react";

const FactButton = (props) => {
    const [isHover, setIsHover] = useState(false);

    const handleMouseEnter = () => {
        setIsHover(true);
    };
    const handleMouseLeave = () => {
        setIsHover(false);
    };

   let buttonStyle = {
        marginTop: "2rem",
        paddingTop: "5px",
        paddingBottom: "5px",
        paddingLeft: "15px",
        paddingRight: "15px",
        border: "2px solid #8a83c6",
        background: isHover ? "#8a83c6" : "#0D0C12",
        cursor:"pointer"
    };
    return (
        <>
            <div style={buttonStyle}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onClick={props.messagehandler}>{props.message}</div>
        </>
    );
}

export default FactButton;