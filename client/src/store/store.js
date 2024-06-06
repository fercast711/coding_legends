import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "./slice/filterSlice";

export default configureStore({
    reducer:{
        filter: filterReducer
    }
})