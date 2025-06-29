import React from "react";

function Increment({setCount,count}){
    return(
        <div>
            <button onClick={()=>setCount(prev=>prev+1)}  >Increment</button>
        </div>
    )
}
export default Increment;