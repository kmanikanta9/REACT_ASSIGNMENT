import React, { Children, createContext, useState } from "react";


export const DataContext=createContext()
function DataProvider({children}){
    const [state,setState]=useState({
        loading:false,
        error:null,
        data:null
    })

    async function fetchdata(){
        setState({...state, loading:true})
        try {
            let response=await fetch("https://jsonplaceholder.typicode.com/posts");
            const  result=await response.json()
            console.log(result)
            setState({...state,  loading:false,data:result})
            console.log(state)
        } catch (error) {
            setState({...state,error:"Data Not Found"})
        }
        finally{
            setState({...state,loading:false})
        }
    }

    return(
        <DataContext.Provider value={{state,fetchdata}}>
            {children}
        </DataContext.Provider>
    )
}

export default DataProvider;