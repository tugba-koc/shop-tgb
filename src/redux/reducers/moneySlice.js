import { createSlice } from "@reduxjs/toolkit";

export const moneySlice = createSlice({
  name: "money",
  initialState: {
    item: 100000000000,
    cart: [],
  },
  reducers: {
    sellItem: (state, action) => {
      if (state.item < 100000000000) {
        state.item += Number(action.payload);
      }
    },
    buyItem: (state, action) => {
      state.item -= action.payload;
    },
    addToCart: (state, action) => {
      state.cart.push(action.payload);
    },
  },
});

export const selectMoney = (state) => state.money.item;
export const selectCart = (state) => state.money.cart;

export const { sellItem, buyItem, addToCart } = moneySlice.actions;
export default moneySlice.reducer;
