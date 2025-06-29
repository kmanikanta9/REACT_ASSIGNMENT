import React from "react";

function ProfileCard({name="Karthik",age=18,bio="He is my Younger Brother."}){
    return(
        <div style={{border:"1px solid red",gap:"10px",margin:"10px",borderRadius:"6px"}}>
            <h1>Name:{name}</h1>
            <h3>Age:{age}</h3>
            <p>Bio:{bio}</p>
        </div>
    )
}

export default ProfileCard;