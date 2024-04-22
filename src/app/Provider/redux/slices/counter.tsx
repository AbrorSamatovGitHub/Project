import { createSlice } from "@reduxjs/toolkit";

interface CounterType {
    count: number;
};


const initialState: CounterType = {
    count: 0,
};


const counter = createSlice({
    initialState,
    name: "counter",
    reducers: {}
});


export default counter.reducer;