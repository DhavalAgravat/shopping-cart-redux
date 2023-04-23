import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import productReducer from "./productSlice";

//* Import Following for persist
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

//! Config persist file
const perssistConfig = {
  key: "persist-product",
  storage,
};

//! Set data using persist reducer  pass persistconfig and data u want to add in persist
const persistedReducer = persistReducer(perssistConfig, productReducer);

//*  Configure store and add exported reducer to store reducers
const store = configureStore({
  reducer: {
    cart: cartReducer,
    product: persistedReducer,
  },
});

//! Setting persistor using persist store
const persistor = persistStore(store);

export default store;

//! exporting persist store
export { persistor };
