import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "./slice/filterSlice";
// Creamos la store que envolvera el proyecto y nos permitira usar estados globales
export default configureStore({
    reducer:{
        filter: filterReducer
    }
})