import React, { useState } from "react";
import Increment from "./Increment";
import Decrement from "./Decrement";

function Display(){
    const [count,setCount]=useState(0);
    return(
        <div>
            <h1>Count:{count}</h1>
            <Increment setCount={setCount} count={count}/>
            <Decrement setCount={setCount} count={count}/>

        </div>
    )
}

export default Display;