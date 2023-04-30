import React, { useContext } from "react";
import CompC from './CompC';
import { FirstName } from "../App";

const CompB = () => {
    
const fname= useContext(FirstName);
    return(
        <>
            <h1>{fname}</h1>
        </>
    )
}

export default CompB;