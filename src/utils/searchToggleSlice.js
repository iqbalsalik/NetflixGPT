import { createSlice } from "@reduxjs/toolkit";

const searchToggleSlice = createSlice({
    name:"search",
    initialState:{
        toggle:false
    },
    reducers:{
        toggleSearchPage:(state,action)=>{
            state.toggle = !state.toggle
        }
    }
});

export const { toggleSearchPage} = searchToggleSlice.actions;

export default searchToggleSlice.reducer;