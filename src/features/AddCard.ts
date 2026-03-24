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
      
    }
  },
});


export const { addItem} = addCardItem.actions;

export default addCardItem.reducer;