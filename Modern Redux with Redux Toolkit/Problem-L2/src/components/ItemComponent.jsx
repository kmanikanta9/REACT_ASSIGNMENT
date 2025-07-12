import React, { useState } from 'react'
import {useSelector,useDispatch} from "react-redux";
import { addItem,removeItem,totalPrice } from '../redux/cartSlice';
const ItemComponent = () => {
    const items=useSelector(state=>state.items)
    const dispatch=useDispatch();
    const [itemInput,setItemInput]=useState({
        item:"",
        price:""
    })
    console.log(items)
    function handleSubmit(){
      if(itemInput.item && itemInput.price){

        dispatch(addItem({...itemInput,item:itemInput.item,id:Date.now(),price:parseInt(itemInput.price)}))
        setItemInput({item:"",price:""})
      }
      
    }
    function handleChange(e){
        setItemInput({...itemInput,[e.target.name]:e.target.value})
    }
   
    const getTotal=()=>items.reduce((acc,i)=>acc+(i.price),0)
    console.log(getTotal())
  return (
    <div>
      <h2>Cart Items</h2>
      <form>
        <label>
            Item Name: 
            <input type="text" name="item" value={itemInput.item} onChange={handleChange} />
        </label>
        <br />
        <br />
        <label>
            Item Price:
            <input type="Number" name="price" value={itemInput.price} onChange={handleChange} />
        </label>
        
      </form>
      <button onClick={handleSubmit}>Submit</button>
      
      {items && items.map((item)=>(
        <div key={item.id} style={{border:"2px solid blue"}}>
          <p>Item Name:  {item.item}</p>
          <span style={{color:"green"}}> Item Price:  {item.price} <button onClick={()=>dispatch(removeItem(item.id))}>Remove Item</button></span>
         
          <h3>Total: {getTotal()}</h3>
          
        </div>
        
      ))}
    </div>
  )
}

export default ItemComponent
