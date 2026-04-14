import { createSlice, PayloadAction } from "@reduxjs/toolkit";


type AddCardState = {
  items: [];
};

const initialState: AddCardState = {
  items:[],
};

const addCardItem = createSlice({
  name: "addCardItem",
  initialState,
  reducers: {
    addItem: (state, action) => {
        state.items.push(action.payload)
    },
    removeItem: (state, action: PayloadAction<number>) => {
      // we'll remove item by id
      state.items = state.items.filter(item => item.id !== action.payload);
    },
},
});


export const { addItem, removeItem} = addCardItem.actions;

export default addCardItem.reducer;