import React, { useState } from "react";
import {useDispatch,useSelector} from "react-redux"
import { signupUser } from "../features/auth/authSlice";

function Signup(){
    const dispatch=useDispatch();
    const {user,loading,error}=useSelector((state)=>state.auth)
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [formError,setFormError]=useState("")

    console.log(user)
    const handleSubmit=(e)=>{
        
        if(!email || !password){
            setFormError("Please fill out the fields")
            return
        }
        if(password.length<6){
            setFormError("Password must be at least 6 characters")
            return
        }
        setFormError("")
        dispatch(signupUser({email,password}))
    }

    return(
        <>
        <div>
            <form>
                <label>
                    Email: 
                    <input type="email" value={email} name="email" onChange={(e)=>setEmail(e.target.value)}  />
                </label>
                <label>
                    Password: 
                    <input type="password" value={password} name="password" onChange={(e)=>setPassword(e.target.value)}  />
                </label>
            </form>
            <button onClick={handleSubmit}>Submit</button>
        </div>
        
        </>
    )
}
export default Signup;