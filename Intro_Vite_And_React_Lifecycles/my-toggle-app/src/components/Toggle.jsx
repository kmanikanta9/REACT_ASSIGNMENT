import React, { useState } from "react";


function Toggle(){
    const [toggle,setToggle]=useState("ON")
    function handleToggle(){
        const newToggle=toggle=="ON"?"OFF":"ON"
        setToggle(newToggle)
    }
    return(
        <>
    
        <div>
            
            <h1 style={{color:toggle==="ON"?"green":"red"}}>This is the Text {toggle=="ON"?"Green":"Red"} color.</h1>
            <button onClick={handleToggle}>Change color: {toggle==="ON"?"ON":"OFF"}</button>
        </div>
        </>
    )
}

export default Toggle;