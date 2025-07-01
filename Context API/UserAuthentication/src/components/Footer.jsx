import React from "react";
import { useContext } from "react";
import LoggedContext from "./LoggedContext";

function Footer(){
    const {state}=useContext(LoggedContext)
    return(
        <div>From Footer Context: {state==false?"User Not Logged":"User LoggedIn"}</div>
    )
}
export default Footer;