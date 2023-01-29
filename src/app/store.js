// Dependency Imports
import { configureStore } from '@reduxjs/toolkit';
import { createLogger } from "redux-logger";
// Local Imports
import postReducer from '../features/Post/PostSlice';


const middleware = [ createLogger() ];

export const store = configureStore({
    reducer: {
        postItems: postReducer,
    },
    middleware
})

export default store;
