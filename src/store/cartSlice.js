import { createSlice } from "@reduxjs/toolkit";

//* Declare Initial State
const initialState = [];

//* Create a Slice For Data
//* Call createSlice Function Which Takes Object As Input

const cartSlice = createSlice({
  name: "cart", //! name of slice
  initialState, //! initial state
  reducers: {
    //! reducer functions
    add(state, action) {
      state.push(action.payload); //! here state is initial state and action payload is argumentt which we pass to reducre function while calling it
    },
    remove(state, action) {
      return state.filter((item) => item.id !== action.payload);
      //   console.log(action.payload);
      //   state.splice(action.payload, 1);
      //   state.filter((item) => item.id === action.payload) &&
      //     state.splice(action.payload, 1);
    },
  },
});

//* export reducer functions and reducer of cartslice

export const { add, remove } = cartSlice.actions;

export default cartSlice.reducer;
