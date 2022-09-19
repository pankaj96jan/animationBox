import { Countertops } from "@mui/icons-material";
import { createSlice } from "@reduxjs/toolkit";

const initialState={
    count:0
}

const countSlice=createSlice({
    name:"count",
    initialState,
    reducers:{
        increment(state){
            state.count++
        },

    }
})

export const {increment} =countSlice.actions;
export default countSlice