import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = {basket: []};

const basketSlice = createSlice({
    name: 'Basket Items',
    initialState: initialState,
    reducers: {
        addItem(state, action){
         state.basket = [...state.basket, action.payload.item]
        },
        removeItem(state, action){

        }
    }
});

export const basketActions = basketSlice.actions;

const store = configureStore({reducer: {
    basketReducer: basketSlice.reducer
}})



export default store;