import {createSlice} from "@reduxjs/toolkit";

const cartSlice=createSlice({
    name:"items",
    initialState:[],
    reducers:{
        addItem:(state,action)=>{
            state.push({...action.payload})
        },
        removeItem:(state,action)=>{
            return state.filter(item=>item.id!==action.payload)
        },
    
    }
})

export const {addItem,removeItem,totalPrice} =cartSlice.actions;
export default cartSlice.reducer;