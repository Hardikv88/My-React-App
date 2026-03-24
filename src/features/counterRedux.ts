import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type CounterState = {
  value: number;
};

const initialState: CounterState = {
  value: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state, action: PayloadAction<number>) => {
      state.value += 1;
    },
    decrement: (state,action: PayloadAction<number>) => {
      state.value > 0 ? state.value -= action.payload : 0;
    },
    reset: (state) => {
       state.value =  0;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, reset, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;