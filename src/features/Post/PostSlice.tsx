// Package / Dependency Imports
import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    all: [],
    filteredPostItems: [],
    filteredCount: 0,
};

const postSlice = createSlice({
    name: 'postItems',
    initialState,
    reducers: {
        setPostItems: (state, action) => {
            state.all = action.payload;
        },
        setFilteredPostItems: (state, action) => {
            state.filteredPostItems = action.payload;
            state.filteredCount = (state.filteredPostItems).length;
        },
    },
});

export const { setPostItems, setFilteredPostItems } = postSlice.actions;
export const selectPostItems = (state: any) => state.postItems.all;
export const selectFilteredPostItems = (state: any) => state.postItems.filteredPostItems;
export const selectFilteredCount = (state: any) => state.postItems.filteredCount;

export default postSlice.reducer;
