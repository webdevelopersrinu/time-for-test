import { createSlice } from "@reduxjs/toolkit";

// function findItemIndex(state, payload) {
//   return state.findIndex((item) => item.id === payload.id);
// }

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    revomeItem: (state) => {
      state.items.pop();
    },
    clearItems: (state) => {
      state.items.length = 0;
    },
  },
});

export const { addItem, revomeItem, clearItems } = cartSlice.actions;

export default cartSlice.reducer;
