import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Product } from "models/products";

interface ProductsState {
  products: Product[];
}

const initialState = {
  products: [],
} satisfies ProductsState as ProductsState;

const productsSlice = createSlice({
  name: "products",
  initialState: initialState,
  reducers: {
    initialize(state, action: PayloadAction<Product[]>) {
      state.products = action.payload;
    },
  },
});

export default productsSlice;
