import React, { useContext } from "react";
import { DataContext } from "./DataProvider";
export default function DataComponent(){
    const {state,fetchdata}=useContext(DataContext)
    // console.log(state)

    return(
        <div>
            <button onClick={fetchdata}>Fetch Data</button>
            {state.loading && <p>Loading...</p>}
            {state.data && state.data.map(post=><p>{post.title}</p>)}
        </div>
    )
}