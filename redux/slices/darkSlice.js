import { createSlice } from "@reduxjs/toolkit";

export const darkSlice = createSlice({
    name: "darkMode",
    initialState: {
        darkState: "",
    },
    reducers: {
        setDarkMode: (state, action) => {
            state.darkState = action.payload
        }
    }
});

export const { setDarkMode } = darkSlice.actions;

export const selectDarkValue = state => state.darkMode.darkState;

export default darkSlice.reducer;