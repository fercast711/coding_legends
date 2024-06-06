import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
    name: "filter",
    initialState:{
        day: 'TODAS',
        hour: 'TODAS',

    },
    reducers: {
        setDay: (state, action) => {
            state.day = action.payload
        },
        setHour: (state, action) => {
            state.hour = action.payload
        }
    }
})

export const { setDay, setHour } = filterSlice.actions

export default filterSlice.reducer