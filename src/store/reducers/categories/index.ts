import { Category } from "models/categories";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface CategoriesState {
  categories: Category[];
}

const initialState = {
  categories: [],
} satisfies CategoriesState as CategoriesState;

const categoriesSlice = createSlice({
  name: "categories",
  initialState: initialState,
  reducers: {
    initialize(state, action: PayloadAction<Category[]>) {
      state.categories = action.payload;
    },
  },
});

export default categoriesSlice;
