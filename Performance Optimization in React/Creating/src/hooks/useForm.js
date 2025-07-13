import { useState } from "react";


function useForm(initialValue={}){
    const [data,setData] = useState(initialValue);

    function handleChange(e){
        e.preventDefault();
        const {name,value}=e.target;
        setData({...data,[name]:value})
    }

    const resetForm =()=>{
        setData(initialValue)
    }
    return {data,handleChange,resetForm}
}

export default useForm;