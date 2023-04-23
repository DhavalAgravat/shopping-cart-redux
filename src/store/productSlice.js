import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const STATUSES = Object.freeze({
  IDLE: "idle",
  LOADING: "loading",
  ERROR: "error",
});

const productSlice = createSlice({
  name: "cart",
  initialState: {
    data: [],
    status: STATUSES.LOADING,
  },
  //   reducers: {
  //     setProducts(state, action) {
  //       state.data = action.payload;
  //     },
  //     setStatus(state, action) {
  //       state.status = action.payload;
  //     },
  //   },

  //* To deal with thunks of react toolkit we use extra reducers which makes expection handling easy
  //! Extrareducers is a function which takes a builder as argument builder is nothing but promise returned by out thunks in redux toolkit
  //* We add cases for three type of promise  retturns pending,fulfilled,rejected and set our data as per that

  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state, action) => {
        state.status = STATUSES.LOADING;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = STATUSES.IDLE;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = STATUSES.ERROR;
      });
  },
});

export default productSlice.reducer;

//* Thunks in Redux Toolkit
//! Declare fetch Products and use meythod called createAsync Thunk which takes argues first is keywords and second is async function which calls api and returns data
export const fetchProducts = createAsyncThunk("products/fetch", async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json();
  return data;
});

// export const fetchProducts = createAsyncThunk('products/fetch', async () => {
//     const res = await fetch('https://fakestoreapi.com/products');
//     const data = await res.json();
//     return data;
// });

//! Basic Thunks
// * Thunks is a middlewear  we use when we call API in Our Redux
//! Dont Ever call api or any async function inside a redux reducer
//* Thunks is a Function which also returns function which sets api call and data in slices and in redux

// export function fetchProducts() {
//   return async function fetchProductThunk(dispatch, getState) {
//     dispatch(setStatus(STATUSES.LOADING));
//     try {
//       const res = await fetch("https://fakestoreapi.com/products");
//       const data = await res.json();
//       dispatch(setProducts(data));
//       dispatch(setStatus(STATUSES.IDLE));
//     } catch {
//       dispatch(setStatus(STATUSES.ERROR));
//     }
//   };
// }
