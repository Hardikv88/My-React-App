import { configureStore } from "@reduxjs/toolkit/react";
import counterReducer from "../features/counterRedux";
import addCardItem from "../features/AddCard";


export const store = configureStore({
  reducer: {
    counter: counterReducer, 
    addItem:addCardItem
  },
});


export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;