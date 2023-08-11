import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import productReducer, { productsFetch } from "./features/productSlice";
import cartReducer, { getTotals } from "./features/cartSlice";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

const store = configureStore({
  reducer: {
    products: productReducer,
    cart: cartReducer,
  },
});

store.dispatch(productsFetch());
store.dispatch(getTotals());

root.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
