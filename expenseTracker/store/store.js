import { configureStore } from "@reduxjs/toolkit";
import thunk from 'redux-thunk'
import getData from "./dummyData"


export const store = configureStore({
    reducer: {
        dummyData: getData,   
    },
     middleware: [thunk],
})