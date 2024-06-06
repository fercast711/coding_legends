import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
    name: "filter",
    initialState:{
        data: []

    },
    reducers: {
        setData: (state, action) => {
            state.day = [...action.payload]
        },
    }
})

export const { setData } = filterSlice.actions

export default filterSlice.reducer