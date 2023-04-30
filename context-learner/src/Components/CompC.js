import React from "react";
import { FirstName } from "../App";
const CompC = () => {
    return(
       <>
       <FirstName.Consumer>
        {
            (fname) => {
                return(
                        <h1>
                            My name is {fname}
                        </h1>
                );
            }
        }
       </FirstName.Consumer>
       </>
    )
}

export default CompC;