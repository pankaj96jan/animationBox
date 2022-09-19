import { configureStore } from "@reduxjs/toolkit";
import countSlice from "./slices/countSlice";

const state={
    count:0
}
const store=configureStore({
        reducer:countSlice.reducer
});



export default store