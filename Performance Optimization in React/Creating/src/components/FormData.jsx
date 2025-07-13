
import React from 'react'
import useForm from '../hooks/useForm'

const FormData = () => {
    const {data,handleChange,resetForm} =useForm({
        name:"",
        email:""
    })

    function handleSubmit(e){
        e.preventDefault()
        console.log("Form",data)
    }
  return (
    <div>
        <form >
            <label >
                Name:
                <input type="text" value={data.name} onChange={handleChange} name="name" />
            </label>
            <label >
                Email:
                <input type="email" value={data.email} onChange={handleChange} name="email" />
            </label>
            <button onClick={handleSubmit}>Submit</button>
        </form>
      
    </div>
  )
}

export default FormData
