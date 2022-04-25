import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = { basket: [] };

const basketSlice = createSlice({
  name: "Basket Items",
  initialState: initialState,
  reducers: {
    addItem(state, action) {
      let inBasket = state.basket.some(
        (item) => item.id === action.payload.item.id
      );
      const index = state.basket.findIndex(object => {
        return object.id === action.payload.item.id;
      });
      
      if (inBasket) {
        state.basket[index].quantity = state.basket[index].quantity + 1;
      } else {
        state.basket = [...state.basket, action.payload.item];
      }
    },
    removeItem(state, action) {
      const index = state.basket.findIndex(object => {
        return object.id === action.payload.item.id;
      });
      
      if(state.basket[index].quantity > 1) {
        state.basket[index].quantity = state.basket[index].quantity - 1;
      } else {
        state.basket.splice(index, 1);
      }

    },
  },
});

export const basketActions = basketSlice.actions;

const store = configureStore({
  reducer: {
    basketReducer: basketSlice.reducer,
  },
});

export default store;
