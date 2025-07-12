import React from "react";
import TopMain from "./TopMain";
import BottomMain from "./BottomMain";
function Main({isLoggedIn}){
    return(
        <div>
            <TopMain/>
            <BottomMain/>
        </div>
    )
}
export default Main