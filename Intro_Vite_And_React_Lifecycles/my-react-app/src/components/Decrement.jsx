import React from "react";

function Decrement({setCount,count}){
    return(
        <div>
            <button disabled={count==0} onClick={()=>setCount(prev=>prev-1)}  >Decrement</button>
        </div>
    )
}

export default Decrement