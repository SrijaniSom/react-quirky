import React from "react";

const Shoutoutput = (props) => {
        return(
            <div style={{
                color: "#8a83c6",
                fontWeight: "400",
                fontSize: "5rem",
                textAlign: "center",
                letterSpacing: "2px",
                marginBottom: "1rem",
            }}>
                <div>{props.shoutval}</div>
            </div>
        );
}

export default Shoutoutput;