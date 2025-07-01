import React, { useContext } from "react";
import { dataContext } from "../App";

function Component(){
    const name=useContext(dataContext)
    return(
        <div>
            <h1> Hello, {name || "Guest"}</h1>
        </div>
    )
}
export default Component;