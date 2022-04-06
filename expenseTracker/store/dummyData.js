import { createSlice } from "@reduxjs/toolkit";
import {DUMMY_EXPENSES} from "../utils/dummyList"

const DummyData = createSlice({
    name: 'Dummy Data',
    initialState: {
        dummyDatas: DUMMY_EXPENSES,
    },
    reducers: {
        getData: (state, action) => {
            state.dummyDatas
        },
        addExpense:(state, action) => {
            const id = new Date().toString() + Math.random().toString();
            state.dummyDatas = [{...action.payload, id: id}, ...state.dummyDatas]
        },
        deleteExpense: (state, action) => {
         const newData = state.dummyDatas.filter(data => data.id !== action.payload)
         state.dummyDatas = newData
        },
        updateExpense: (state, action) => {
            var updateData = state.dummyDatas.findIndex(data => data.id === action.payload.id)
            const updateExpense = state.dummyDatas[updateData]
            const updateItem = {...updateExpense, ...action.payload}
            const updatedExpenses = [...state.dummyDatas];
            updatedExpenses[updateData] = updateItem
            state.dummyDatas = updatedExpenses
        }
    }

})



export const getDataFunction =  DummyData.actions.getData

export const addFunction =  DummyData.actions.addExpense

export const deleteFunction =  DummyData.actions.deleteExpense

export const updateFunction =  DummyData.actions.updateExpense

export default DummyData.reducer