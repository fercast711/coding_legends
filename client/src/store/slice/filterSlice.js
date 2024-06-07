import { createSlice } from "@reduxjs/toolkit";
// Creamos la slice que contendra la informacion que traeremos de la base de datos para luego utilizarla para crear el grafo
const filterSlice = createSlice({
    name: "filter",
    initialState:{
        data: []

    },
    reducers: {
        // Creamos la funcion que seteara la data del grafo
        setData: (state, action) => {
            state.data = [...action.payload]
        },
    }
})

export const { setData } = filterSlice.actions

export default filterSlice.reducer