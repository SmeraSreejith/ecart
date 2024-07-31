import { createSlice } from "@reduxjs/toolkit";



 export  const wishlistSlice = createSlice({
    name:'wishlistSlice',
    initialState:[],
    reducers:{
        //1)add to wishlist
        addToWishlist:(state , actions)=>{
            state.push(actions.payload)
        },
        
        //2)remove from wishlist
        removeFromWishlist:(state,actions)=>{
          return  state.filter(item=>item.id!=actions.payload)
        }
    }
})

export const {addToWishlist , removeFromWishlist} = wishlistSlice.actions
export default wishlistSlice.reducer


