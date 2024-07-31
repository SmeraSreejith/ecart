import { createSlice } from "@reduxjs/toolkit";





 export const cartSlice = createSlice({
    name:'cart',
    initialState:[],
    reducers:{
        addToCart:(state,action)=>{
            state.push(action.payload)

        },
        removeItemCart:(state,action)=>{
          return state.filter(item=>item.id!=action.payload)
        },
        emptyCart:(state)=>{
            return state=[]
        }
    }
})

export const {addToCart , removeItemCart , emptyCart} = cartSlice.actions
export default cartSlice.reducer