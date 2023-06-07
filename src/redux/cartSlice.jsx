import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQuantity: 0,
    changed: false,
    totalPrice: 0,
  },
  reducers: {
    addItemFromDB(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      state.totalQuantity += newItem.quantity;
      state.totalPrice += newItem.price;
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          quantity: newItem.quantity,
          totalPrice: newItem.price,
          name: newItem.name,
          image: newItem.image,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice += newItem.price;
      }
    },
    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      state.totalQuantity++;
      state.totalPrice = state.totalPrice + newItem.price;
      state.changed = true;
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          image: newItem.image,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          name: newItem.title,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice + newItem.price;
      }
    },
    removeItemFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      state.totalQuantity--;
      state.totalPrice = state.totalPrice - existingItem.price;
      state.changed = true;
      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
      }
    },
    removeAllItemsFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      state.totalQuantity = state.totalQuantity - existingItem.quantity;

      state.totalPrice = state.totalPrice - existingItem.totalPrice;
      state.changed = true;
      state.items = state.items.filter((item) => item.id !== id);
    },
    emptyTheCart(state) {
      state.items = [];
      state.totalQuantity = 0;
      state.changed = false;
      state.totalPrice = 0;
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
